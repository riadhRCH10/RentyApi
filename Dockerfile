# Use Node.js base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Build the application (assuming this step is necessary)
RUN npm run build

# Expose the port your application uses (e.g., port 3000)
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "run", "start:prod"]
