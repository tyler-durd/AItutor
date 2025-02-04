from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.ai_service import generate_summary

app = FastAPI()

# Allow frontend to connect to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/summary")
async def get_summary(topic: str):
    return {"summary": generate_summary(topic)}
