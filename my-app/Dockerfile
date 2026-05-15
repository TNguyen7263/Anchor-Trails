# start at official Node.js image version 22 lightweight distro
FROM node:22-alpine
# Inside the container, all commands operate in /app
WORKDIR /app
# copies package.json, package-lock.json from the computer into the container
COPY package*.json ./
# runs npm install so container has React, Next.js, Tailwind, all dependencies
RUN npm install

# copy rest of project into the container
COPY . .
# builds the app
RUN npm run build
# Document the app listens to port 3000.
EXPOSE 3000
# runs npm run dev when the container launches
CMD ["npm", "run", "dev" ]