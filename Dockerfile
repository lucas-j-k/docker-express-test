FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy Package and Package.lock into the working directory in container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy app source files into the container working directory
COPY . .

# Expose port the app serves on, so we can access it on the container
EXPOSE 3000

CMD ["node", "index.js"]
