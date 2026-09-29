FROM node:22-alpine

WORKDIR /app

COPY server.js .

RUN sleep 20000

EXPOSE 3000

CMD ["node", "server.js"]
