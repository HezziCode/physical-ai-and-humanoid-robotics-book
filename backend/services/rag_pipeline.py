from typing import List, Optional
import openai
from qdrant_client import QdrantClient
from qdrant_client.models import QueryVector, PointStruct

from config import settings

class RAGPipeline:
    def __init__(self):
        self.qdrant_client = QdrantClient(
            url=settings.qdrant_url,
            api_key=settings.qdrant_api_key
        )
        openai.api_key = settings.openai_api_key

    def generate_embeddings(self, text: str) -> List[float]:
        response = openai.embeddings.create(
            input=text,
            model="text-embedding-3-large"
        )
        return response.data[0].embedding

    async def query_rag(self, query: str, selected_text: Optional[str] = None) -> (str, List[str]):
        query_text = selected_text if selected_text else query
        query_embedding = self.generate_embeddings(query_text)

        search_result = self.qdrant_client.query(
            collection_name="book_chapters",
            query_vector=QueryVector(vector=query_embedding, distance=None),
            limit=3, # Retrieve top 3 relevant documents
            with_payload=True
        )

        source_documents = [
            point.payload["text"] for point in search_result if point.payload and "text" in point.payload
        ]

        context = "\n\n".join(source_documents)

        messages = [
            {"role": "system", "content": "You are a helpful assistant for a textbook on Physical AI & Humanoid Robotics. Answer the user's question based ONLY on the provided context."},
            {"role": "user", "content": f"Context: {context}\n\nQuestion: {query}"}
        ]

        if selected_text:
            messages.insert(1, {"role": "user", "content": f"The user has also selected this text in the document, prioritize answers related to this text: {selected_text}"})

        chat_response = openai.chat.completions.create(
            model="gpt-4o",
            messages=messages
        )
        answer = chat_response.choices[0].message.content

        return answer, source_documents
