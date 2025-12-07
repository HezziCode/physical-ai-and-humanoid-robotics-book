# backend/index_book.py
import os
import os
from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct, VectorParams, Distance
import google.generativeai as genai
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Connect to Qdrant Cloud
client = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

# Configure Gemini (free embedding)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

COLLECTION_NAME = "physical_ai_book"
EMBEDDING_MODEL = "models/embedding-001"  # Gemini ka free embedding model

# Create collection if not exists
if not client.collection_exists(COLLECTION_NAME):
    client.create_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=VectorParams(size=768, distance=Distance.COSINE),  # Gemini 768 dim deta hai
    )
    print("Created new Qdrant collection:", COLLECTION_NAME)
else:
    print("Collection already exists, appending...")

# Read all MDX files from frontend chapters
chapters_dir = Path("../frontend/docs/chapters")
points = []
id_counter = client.count(COLLECTION_NAME).count + 1  # Resume from existing count

print("Starting indexing...")

for file_path in chapters_dir.glob("*.mdx"):
    print(f"Processing: {file_path.name}")
    content = file_path.read_text(encoding="utf-8")
    
    # Remove frontmatter and code blocks (optional cleanup)
    lines = content.split('\n')
    if lines and lines[0].strip() == '---':
        # Skip frontmatter
        i = 1
        while i < len(lines) and lines[i].strip() != '---':
            i += 1
        content = '\n'.join(lines[i+1:])

    # Chunk by ~400 words (Gemini supports up to 2048 tokens)
    words = content.split()
    chunks = [' '.join(words[i:i+400]) for i in range(0, len(words), 400)]

    for idx, chunk in enumerate(chunks):
        if not chunk.strip():
            continue

        try:
            # Gemini embedding (free!)
            result = genai.embed_content(
                model=EMBEDDING_MODEL,
                content=chunk,
                task_type="retrieval_document"
            )
            embedding = result['embedding']

            points.append(PointStruct(
                id=id_counter,
                vector=embedding,
                payload={
                    "text": chunk,
                    "chapter": file_path.stem,
                    "chunk_id": idx,
                    "source_file": str(file_path.name)
                }
            ))
            id_counter += 1

        except Exception as e:
            print(f"Error embedding chunk {idx} in {file_path.name}: {e}")

# Upload to Qdrant
if points:
    client.upsert(collection_name=COLLECTION_NAME, points=points)
    print(f"\nSUCCESS! Indexed {len(points)} new chunks.")
    print(f"Total chunks in Qdrant: {client.count(COLLECTION_NAME).count}")
else:
    print("No new chunks to index.")

print("Indexing complete!")