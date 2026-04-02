#!/bin/bash

# Default environment variables
export PORT=${PORT:-5000}
export BASE_PATH=${BASE_PATH:-/}
export NODE_ENV=${NODE_ENV:-development}

echo "Installing dependencies..."
pnpm install

echo "Starting services..."

# Start the API Server
echo "Starting API Server on port $PORT..."
pnpm --filter @workspace/api-server run dev &
API_PID=$!

# Start the Threnlabs Launcher frontend
FRONTEND_PORT=$((PORT + 1))
echo "Starting Threnlabs frontend on port $FRONTEND_PORT..."
PORT=$FRONTEND_PORT pnpm --filter @workspace/threnlabs run dev &
FRONTEND_PID=$!

# Start the Mockup Sandbox
SANDBOX_PORT=$((PORT + 2))
echo "Starting Mockup Sandbox on port $SANDBOX_PORT..."
PORT=$SANDBOX_PORT pnpm --filter @workspace/mockup-sandbox run dev &
SANDBOX_PID=$!

# Handle shutdown gracefully
trap "kill $API_PID $FRONTEND_PID $SANDBOX_PID; exit" SIGINT SIGTERM

echo "All services started. Press Ctrl+C to stop."
wait $API_PID $FRONTEND_PID $SANDBOX_PID
