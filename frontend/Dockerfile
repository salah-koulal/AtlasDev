# Use Node.js image as the base image for frontend
FROM node:latest as frontend

# Set the working directory for the frontend
WORKDIR /frontend

# Copy frontend files to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files to container
COPY frontend/ .

# Expose the port that Vite runs on
EXPOSE 3000

# Run Vite dev server
CMD ["npm", "run", "dev"]