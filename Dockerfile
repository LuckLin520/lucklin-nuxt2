FROM node:12-alpine
MAINTAINER 502763576@qq.com
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
ENTRYPOINT ["yarn"]
CMD ["start"]