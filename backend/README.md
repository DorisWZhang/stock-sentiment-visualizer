# Stock Sentiment Visualizer Backend

A basic FastAPI backend for the stock sentiment visualizer project.

## Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Backend

### Option 1: Using Python directly
```bash
python main.py
```

### Option 2: Using Uvicorn directly
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - Root endpoint with welcome message
- `GET /health` - Health check endpoint
- `GET /api/stocks` - Placeholder endpoint for stock data

## API Documentation

Once running, you can view the interactive API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Development

The `--reload` flag enables auto-reload during development, so the server will restart when you make changes to the code.
