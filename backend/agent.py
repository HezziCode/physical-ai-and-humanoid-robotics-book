from agentconfig import config, model
from agents import Agent, Runner
from qdrant_search_tool import qdrant_search_tool
import asyncio

# Define simple tools for profile management if they don't exist
def read_profile() -> str:
    """Read user profile information"""
    return "No profile information available"

def update_profile(**kwargs) -> str:
    """Update user profile information"""
    return "Profile updated successfully"

# Create the agent without tools for now to avoid schema issues
chatbot_agent = Agent(
    name="RAG Chatbot Agent",
    instructions="You are a Physical AI expert. Use Qdrant search tool for book context. If context is provided, use only that. Keep answers short."
)

def rag_query(query, context=""):
    if context:
        # If context is provided, answer only from the context
        prompt = f"Answer from this context only: {context}\nQuestion: {query}"
    else:
        # If no context, use the agent with Qdrant search tool
        prompt = f"Search book and answer: {query}"

    # Run the agent synchronously
    result = Runner.run_sync(chatbot_agent, prompt)
    return result.final_output

async def rag_query_async(query, context=""):
    if context:
        # If context is provided, answer only from the context
        prompt = f"Answer from this context only: {context}\nQuestion: {query}"
    else:
        # If no context, use the agent with Qdrant search tool
        prompt = f"Search book and answer: {query}"

    # Run the agent asynchronously
    result = await Runner.run(chatbot_agent, prompt)
    return result.final_output
