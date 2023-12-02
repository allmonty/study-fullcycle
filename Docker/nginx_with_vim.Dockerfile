FROM nginx:latest

RUN apt-get update
RUN apt-get install vim -y

# creates an nginx image that already has vim installed