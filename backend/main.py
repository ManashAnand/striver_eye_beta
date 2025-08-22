from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def read_root():
    return {"health": "working smoothly on render"}
