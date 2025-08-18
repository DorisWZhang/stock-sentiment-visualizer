from transformers import AutoTokenizer, AutoModelForSequenceClassification 

model_name = "LHF/finbert-regressor"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)