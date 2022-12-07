FROM node:15-alpine
WORKDIR /app
ARG PROFILE
ENV NODE_ENV=$PROFILE
COPY package*.json .env.${PROFILE} dist ./
COPY . .
RUN npm install --production

EXPOSE 3001

CMD ["node","index.js"]