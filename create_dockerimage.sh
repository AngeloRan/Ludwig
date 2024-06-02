#!/bin/bash

cd $HOME/app/Ludwig

docker build -t ludwig:latest . --no-cache

docker run -d -p 443:443 -v $HOME/app/Ludwig/public:/app/public ludwig:latest