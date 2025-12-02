from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import timedelta

from services.rag_pipeline import RAGPipeline
from database import SessionLocal, User, UserCreate, UserInDB, Token, create_db_tables
from security import get_password_hash, verify_password, create_access_token
from config import settings

app = FastAPI()

rag_pipeline = RAGPipeline()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

# Create database tables on startup
@app.on_event("startup")
def on_startup():
    create_db_tables()

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Define request and response models
class RagQueryRequest(BaseModel):
    query: str
    selected_text: Optional[str] = None

class RagQueryResponse(BaseModel):
    response: str
    source_documents: List[str] = []

@app.get("/")
async def read_root():
    return {"message": "Welcome to Physical AI & Humanoid Robotics Backend!"}

@app.post("/rag/query", response_model=RagQueryResponse)
async def rag_query(request: RagQueryRequest):
    try:
        answer, source_documents = await rag_pipeline.query_rag(request.query, request.selected_text)
        return RagQueryResponse(response=answer, source_documents=source_documents)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# User registration endpoint
@app.post("/auth/signup", response_model=UserInDB, status_code=status.HTTP_201_CREATED)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already registered")

    hashed_password = get_password_hash(user.password)
    db_user = User(
        username=user.username,
        hashed_password=hashed_password,
        experience=user.experience,
        ai_knowledge=user.ai_knowledge,
        hardware=user.hardware,
        language=user.language
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# User login endpoint
@app.post("/auth/token", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes) # This needs to be added to config.py and .env
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


