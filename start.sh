#!/bin/bash

# Default environment variables
export PORT=${PORT:-5000}
export BASE_PATH=${BASE_PATH:-/}
export NODE_ENV=${NODE_ENV:-development}

echo "Installing dependencies..."
pnpm install

echo "Starting Threnlabs frontend on port $PORT..."
PORT=$PORT pnpm run dev
