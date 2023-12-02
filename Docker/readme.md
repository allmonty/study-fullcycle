# Docker Course

## Starting

    # docker ps -> show all running containers
    # docker ps -a -> show all containers running and exited
    # docker run hello-world -> starts a hello-world container

## Executing Ubuntu

    # docker run -it --rm ubuntu bash

"-i" is for attaching to terminal
"-t" is for tty, that makes it possible to type in terminal
"--rm" removes the container from docker ps -a history
This command will start an Ubuntu image and execute bash

## Publishing ports with Nginx

    # docker run -p 8080:80 nginx

This command will start an Nginx that will listen to the port 80.
"-p 8080:80" will attach the host (my pc) port 8080 to the container port 80
but will attach the terminal to the nginx logs

    # docker run -d -p 8080:80 nginx

"-d" mean detach, avoing terminal to be locked

## Removing Containers

    # docker rm <container_name>

## Accessing and Modifying container files

With the nginx running

    # docker exec <container_name> ls

will list all the files in the container

    # docker exec -it <container_name> bash

will access and attach the terminal to the container bash.
Any modifications will be lost after container stop

## Starting with bind mounts

    # docker run -d --name nginx -p 8080:80 -v <path_to_folder_in_host>:<path_to_folder_in_container> nginx

Will link a folder in host to a folder in container and modification will be kept after container stops.
But "-v" is an old command, the current way is using "--mount"

    # docker run -d --name nginx -p 8080:80 --mount type=bing,source="$(pwd)/html",target=/usr/share/nginx/html nginx

A more explicit way to bind folders

## Working with volumes

    # docker volume ls

Shows the volumes created

    # docker volume create <volume_name>

create a volume

    # docker volume inspect <volume_name>

inspect volume infos

    # docker run -d --name nginx1 -p 8080:80 --mount type=bing,source=<volume_name>,target=/app nginx
    # docker run -d --name nginx2 -p 8080:80 --mount type=bing,source=<volume_name>,target=/app nginx

Creates 2 containers that shares the same volume

    # docker volume prune

deletes the unused volumes

## Docker Images

There is a site with many images to download [Docker Hub](hub.docker.com)

Refer to Dockerfile to see how to create an image

    # docker build -t <dockerhub_username>/nginx-with-vim:latest .

Will build the docker file with the passed name with "-t" from the folder "."

## Advancing with Dockerfile

WORKDIR -> will define the directory to work in the container as a starting folder

COPY -> copy something from the host to the container


## ENTREYPOINT vs CMD

CMD -> will execute the command on the container start, but can be overwritten passing a command when calling `docker run`

ENTRYPOINT -> will execute the command on the container start, can't e overwritten

    # ENTRYPOINT ["echo", "Hello "]
    # CMD ["World"]

In this example, "World" can be overwritten in the container start. e.g. `docker run <container_name> Allan` will echo "Hello Allan"

## Docker entrypoint exec

EXPOSE 80 -> exposes the container 80 port to the docker network

The nginx image has a CMD in the end of the dockerfile that allows us to overwrite the commando as we wish

## 