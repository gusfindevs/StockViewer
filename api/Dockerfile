FROM python:3.9

EXPOSE 8000

WORKDIR /api

COPY ./requirements.txt /api/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /api/requirements.txt

COPY . /api

ENV MYSQL_HOST ${MYSQL_HOST}
ENV MYSQL_PORT ${MYSQL_PORT}
ENV MYSQL_USER ${MYSQL_USER}
ENV MYSQL_PASSWORD ${MYSQL_PASSWORD}
ENV MYSQL_DATABASE ${MYSQL_DATABASE}

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

