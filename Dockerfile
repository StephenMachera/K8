#Use a lightweight node Base image
FROM node:20-alpine

#Create a working directory
WORKDIR /app

#Copy package modules for to enable caching
COPY package.json pnpm-lock.yaml ./

#Install pnpm then install npm module using pnpm
RUN npm install -g pnpm && pnpm install --frozen-lockfile

#Copy app source code
COPY . .

#Expose the app port
EXPOSE 3000

#Run app as non-user to advance security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

#Run the app
CMD ["node","index.js"]