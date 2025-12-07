from qdrant_client import QdrantClient
from qdrant_client.http.models import SearchRequest
import google.generativeai as genai
from config import settings
import os
from agents import function_tool


@function_tool
def qdrant_search_tool(query: str) -> str:
    """
    Search the Qdrant vector database for relevant book content based on the query.
    """
    try:
        qdrant_client = QdrantClient(
            url=settings.qdrant_url,
            api_key=settings.qdrant_api_key
        )

        # Configure Gemini for embedding generation
        genai.configure(api_key=settings.gemini_api_key)

        # Generate embedding for the query using Gemini
        result = genai.embed_content(
            model="models/embedding-001",
            content=query,
            task_type="retrieval_query"
        )
        query_embedding = result['embedding']

        # Search in Qdrant
        search_result = qdrant_client.search(
            collection_name="physical_ai_book",  # Using the collection name from index-book.py
            query_vector=query_embedding,
            limit=5,  # Retrieve top 5 relevant documents as specified
            with_payload=True
        )

        # Extract the text content from the search results
        results = []
        for point in search_result:
            if point.payload and "text" in point.payload:
                results.append({
                    "text": point.payload["text"],
                    "chapter": point.payload.get("chapter", "Unknown"),
                    "score": point.score
                })

        # Format the results to return to the agent
        if results:
            formatted_results = []
            for result in results:
                formatted_results.append(f"Chapter: {result['chapter']}\nContent: {result['text']}\nRelevance Score: {result['score']}\n---")
            return "\n".join(formatted_results)
        else:
            return "No relevant content found in the book for the given query."

    except Exception as e:
        return f"Error during search: {str(e)}"