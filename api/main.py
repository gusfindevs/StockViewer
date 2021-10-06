import fastapi
import uvicorn

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  port=3306,
  user="root",
  password="root",
  database="stocks"
)

app = fastapi.FastAPI()

@app.get('/')
def index():
    return {
        "message": "Hello world."
    }

@app.get('/marketdata/')
def marketdata(ticker: str, date: str):
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM ohlcv_noad WHERE ticker='{ticker}' AND date = '{date}'")
    result = cursor.fetchall()

    return result

if __name__ == '__main__':
    uvicorn.run(app)