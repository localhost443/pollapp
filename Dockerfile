# Dockerfile
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install dependencies only (package.json and package-lock.json will be mounted)
COPY ./src/package*.json ./

RUN npm install

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Command to start the app (using nodemon for hot reload if it's installed)
CMD ["npm", "run", "dev"]
