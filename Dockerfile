FROM node:9.5.0
ENV HOST 0.0.0.0

COPY . /app/
WORKDIR /app

EXPOSE 3000
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
CMD ["npm", "run", "start"]
