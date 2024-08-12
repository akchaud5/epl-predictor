FROM python:3.11

WORKDIR /app

COPY backend/python/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/python/ .

EXPOSE 5001
CMD ["python", "app.py"]
