#!/usr/bin/env python3
"""
Test script to check if the agent works in isolation
"""

import asyncio
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Set the API key directly for testing
os.environ['GEMINI_API_KEY'] = 'AIzaSyAkW9T-mOQ1lBd8Y-SUxy-DqVJUb_CHrSI'

try:
    from agent import rag_query_async

    async def test_agent():
        print("Testing agent...")
        try:
            result = await rag_query_async("Hello", "")
            print(f"Success: {result}")
        except Exception as e:
            print(f"Error: {e}")
            import traceback
            traceback.print_exc()

    if __name__ == "__main__":
        asyncio.run(test_agent())

except Exception as e:
    print(f"Import error: {e}")
    import traceback
    traceback.print_exc()