FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Expose Storybook port
EXPOSE 6006

RUN npm run build

# Start Storybook
CMD ["npm", "run", "storybook"]
