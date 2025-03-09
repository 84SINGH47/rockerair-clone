#!/bin/bash

# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clean npm cache
npm cache clean --force

# Install dependencies
npm install

# Install additional dev dependencies if needed
npm install --save-dev @types/node @types/react @types/react-dom typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Build the project
npm run build 