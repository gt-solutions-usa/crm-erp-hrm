# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./ 
 # Ensure this copies files correctly

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .  
# Copy all backend code into the current working directory

# Copy .env file if it exists
COPY .env .  
# Copy the .env file into the current working directory

# Expose the port your backend runs on
EXPOSE 8888

# Start the application
CMD ["npm", "start"]
