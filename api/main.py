import os

import fastapi
import uvicorn

import mysql.connector

from fastapi.middleware.cors import CORSMiddleware


mydb = mysql.connector.connect(
  host=os.environ.get('MYSQL_HOST'),
  port=os.environ.get('MYSQL_PORT'),
  user=os.environ.get('MYSQL_USER'),
  password=os.environ.get('MYSQL_PASSWORD'),
  database=os.environ.get('MYSQL_DATABASE')
)

app = fastapi.FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get('/marketdata/tickerlist/')
def tickerlist():
    cursor = mydb.cursor()
    cursor.execute(f"SELECT DISTINCT(ticker) FROM ohlcv_noad;")
    result = cursor.fetchall()
    result = [item[0] for item in result]

    return result

@app.get('/marketdata/dateslist/')
def dateslist(ticker: str):
    cursor = mydb.cursor()
    cursor.execute(f"SELECT DISTINCT(date) FROM ohlcv_noad WHERE ticker='{ticker}';")
    result = cursor.fetchall()
    result = [item[0] for item in result]

    return result

if __name__ == '__main__':
    uvicorn.run(app)