#!/bin/bash

cd $HOME/app/Ludwig

docker build -t ludwig:latest . --no-cache

docker run -d -p 5000:5000 -v $HOME/app/Ludwig/public:/app/public ludwig:latest