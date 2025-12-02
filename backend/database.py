import os
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
from typing import Optional

# Database connection URL from environment variables
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")

# SQLAlchemy setup
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# SQLAlchemy User Model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    experience = Column(String, nullable=True)
    ai_knowledge = Column(String, nullable=True)
    hardware = Column(String, nullable=True)
    language = Column(String, nullable=True)

# Pydantic models for request/response
class UserCreate(BaseModel):
    username: str
    password: str
    experience: Optional[str] = None
    ai_knowledge: Optional[str] = None
    hardware: Optional[str] = None
    language: Optional[str] = None

class UserInDB(BaseModel):
    id: int
    username: str
    experience: Optional[str] = None
    ai_knowledge: Optional[str] = None
    hardware: Optional[str] = None
    language: Optional[str] = None

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

# Function to create tables
def create_db_tables():
    Base.metadata.create_all(bind=engine)
