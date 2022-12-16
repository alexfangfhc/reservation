FROM registry.gitlab.com/tozd/docker/meteor:ubuntu-focal-2.9.0

RUN apt-get update
RUN apt-get install libcurl4

WORKDIR /app
COPY ./ /app
RUN chmod -R 777 /app
RUN npm install
RUN export ROOT_URL=http://localhost:3000 PORT=3000
CMD meteor run

