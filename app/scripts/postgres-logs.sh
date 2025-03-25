#!/bin/bash

# Get logs from PostgreSQL container
# Uses container name (more reliable) if it exists, otherwise falls back to image filtering

if docker ps | grep -q postgres_db; then
  # Use the explicit container name if it exists
  echo "Using container name 'postgres_db' to fetch logs..."
  docker logs postgres_db
else
  # Fall back to finding the first container using postgres:14 image
  CONTAINER_ID=$(docker ps -q -f ancestor=postgres:14 | head -1)
  
  if [ -z "$CONTAINER_ID" ]; then
    echo "Error: No PostgreSQL containers found running"
    exit 1
  fi
  
  echo "Using container ID '$CONTAINER_ID' to fetch logs..."
  docker logs $CONTAINER_ID
fi