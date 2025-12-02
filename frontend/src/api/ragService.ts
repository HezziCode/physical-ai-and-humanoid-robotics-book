// frontend/src/api/ragService.ts

export interface RagQueryRequest {
  query: string;
  context?: string;
}

export interface RagQueryResponse {
  answer: string;
}

// SABSE SAFE WAY — direct window object se padho (Docusaurus 3 mein 100% kaam karta hai)
const API_BASE_URL = 
  (window as any).__DOCUSUARUS_CONFIG__?.customFields?.API_BASE_URL ||
  "http://localhost:8000/api";

export const queryRag = async (request: RagQueryRequest): Promise<RagQueryResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/rag/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    if (!response.ok) throw new Error("Network error");

    const data = await response.json();
    return { answer: data.answer || data.response || "No answer from backend" };
  } catch (error) {
    console.error("RAG Error:", error);
    return { 
      answer: "I'm having trouble connecting right now. Try again in a minute!" 
    };
  }
};