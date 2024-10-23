# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./  
# Copy package files into the current working directory

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .  
# Copy all frontend code into the current working directory

# Copy .env file if it exists
COPY .env ./  
# Copy the .env file into the current working directory

# Build the React application
RUN npm run build

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port your frontend runs on
EXPOSE 3000

# Start the application using serve
CMD ["npm", "run", "preview"]
# CMD ["npm", "run", "dev"]