#!/usr/bin/env bash

# Run the container instance #

NAME="cellantx15"

[[ "$(whoami)" != "root" ]] && exit

docker build -t "$NAME" .
docker run -it --rm -d -p 5001:80 --name web "$NAME"
