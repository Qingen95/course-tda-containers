#!/bin/bash

# Create network
docker network create -d bridge mynet

# Create volume
docker volume create mysqlvol

# Create database under network, mount volume
# Ignore -p so we don't expose port
docker run -d --name mydb --network mynet -v mysqlvol:/var/lib/mysql stackupiss/northwind-db:v1

# Create app under same network
docker run -d --name myapp  -p 8080:3000 --network mynet -e DB_HOST=mydb -e DB_USER=root -e DB_PASSWORD=changeit stackupiss/northwind-app:v1