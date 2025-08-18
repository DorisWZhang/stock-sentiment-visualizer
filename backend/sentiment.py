from transformers import AutoTokenizer, AutoModelForSequenceClassification 
import torch
from datetime import date
from backend.headlines import get_headlines

# model and tokenizer to break raw text into understandable input for model
model_name = "LHF/finbert-regressor"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

def get_sentiment_score(headline: str):
    
    # tokenize inputs
    inputs = tokenizer(headline, return_tensors='pt')
    
    with torch.no_grad():
        outputs = model(**inputs) # call model on inputs
    
    # convert to plain float
    score = outputs.logits.squeeze().item()

    mapped_score = max(min(score *10, 10), -10)

    return mapped_score

def get_sentiments(symbol: str, dt: date):
    headlines = get_headlines(symbol, dt)

    if not headlines:
        raise ValueError(f"No headlines available for {symbol} at {dt}" )
    total_score = 0
    num_headlines = len(headlines)
    for headline in headlines:
        total_score += get_sentiment_score(headline)
    
    sentiment_score = total_score/num_headlines

    return sentiment_score


