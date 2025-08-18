import yfinance as yf
from datetime import datetime

def get_headlines(symbol: str, datetime: date):
    ticker = yf.Ticker(symbol)
    news = ticker.news 

    news_sorted = sorted(news, key=lambda x: x['providerPublishTime'], reverse=True)
    
    target_date_str = target_date.strftime("%Y-%m-%d")
    headlines = []

    for item in news_sorted:
        news_date_str = datetime.fromtimestamp(item['providerPublishTime']).strftime("%Y-%m-%d")
        if news_date_str == target_date_str:
            headlines.append(item['title'])

    # if no headlines for target date, fallback to latest available news
    if not headlines and news_sorted:
        latest_date_str = datetime.fromtimestamp(news_sorted[0]['providerPublishTime']).strftime("%Y-%m-%d")
        headlines = [item['title'] for item in news_sorted if datetime.fromtimestamp(item['providerPublishTime']).strftime("%Y-%m-%d") == latest_date_str]

    return headlines
    