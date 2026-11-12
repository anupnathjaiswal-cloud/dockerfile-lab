from fastapi import FastAPI

app = FastAPI(title="Python Docker Lab")


@app.get("/")
def home():
    return {"message": "Python Backend Running!"}


@app.get("/info")
def get_info():
    return {
        "application": "Python Docker Lab",
        "framework": "FastAPI",
        "version": "1.0.0",
        "environment": "Docker"
    }


@app.get("/health")
def health():
    return {"status": "healthy server"}


@app.get("/users")
def get_users():
    return [
        {"id": 1, "name": "Anup"},
        {"id": 2, "name": "Rahul"},
        {"id": 3, "name": "Amit"}
    ]

