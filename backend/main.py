from fastapi import FastAPI
from datetime import datetime
from backend.stock import get_stock_prices
from backend.headlines import get_headlines
from backend.sentiment import get_total_sentiments_score

app = FastAPI()

@app.get("/stock_data")
def stock_data(symbol: str, start: str, end: str):
    # convert iso string -> datetime
    start_dt = datetime.fromisoformat(start)
    end_dt = datetime.fromisoformat(end)

    prices = get_stock_prices(symbol, start_dt, end_dt)

@app.get("/headline_data")
def headlines_data(symbol: str, dt: str):
    date = datetime.fromisoformat(dt).date()
    headlines = get_headlines(symbol, date)
    return headlines

@app.get('/sentiment_score')
def sentiment_score(symbol: str, dt: str):
    date = datetime.fromisoformat(dt).date()
    score = get_total_sentiments_score(symbol, date)
    return score

