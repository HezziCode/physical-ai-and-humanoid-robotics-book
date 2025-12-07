import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    neon_database_url: str = os.getenv('NEON_DATABASE_URL')
    qdrant_url: str = os.getenv('QDRANT_URL')
    qdrant_api_key: str = os.getenv('QDRANT_API_KEY')
    openai_api_key: str = os.getenv('OPENAI_API_KEY')
    gemini_api_key: str = os.getenv('GEMINI_API_KEY')
    secret_key: str = os.getenv('SECRET_KEY', 'super-secret-key') # Default for development
    access_token_expire_minutes: int = int(os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES', 30))

    class Config:
        env_file = '.env'

settings = Settings()