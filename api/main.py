import os

import fastapi
import uvicorn

import mysql.connector


mydb = mysql.connector.connect(
  host=os.environ.get('MYSQL_HOST'),
  port=os.environ.get('MYSQL_PORT'),
  user=os.environ.get('MYSQL_USER'),
  password=os.environ.get('MYSQL_PASSWORD'),
  database=os.environ.get('MYSQL_DATABASE')
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