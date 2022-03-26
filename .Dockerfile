FROM node:12-alpine
MAINTAINER 502763576@qq.com
WORKDIR /app
COPY . /app
#alpine版本已经内置npm和yarn
RUN yarn install
ENTRYPOINT yarn build
CMD ["yarn","start"]