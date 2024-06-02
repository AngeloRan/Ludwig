FROM ubuntu:22.04
RUN rm /bin/sh && ln -s /bin/bash /bin/sh


# Avoid console interaction during install
RUN export DEBCONF_NONINTERACTIVE_SEEN=true
RUN export DEBIAN_FRONTEND=noninteractive

# instal first to avoid problem with console interactions
RUN apt-get update \
  && apt-get install -y tzdata software-properties-common

# python 3.10
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update \
    && apt-get install -y python3.10

# Install software 
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y \
    libpq-dev \
    python3.10-dev \
    python3.10-venv \
    python3-pip \
    wget \ 
    curl \
    nginx \
    sudo 

# node
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
apt-get install -y nodejs
RUN node -v
RUN npm -v

RUN apt-get autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN apt-get purge -y software-properties-common

RUN apt-get clean && apt-get update && apt-get install -y locales language-pack-it
RUN locale-gen en_US.UTF-8
ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en' LC_ALL='en_US.UTF-8' 

WORKDIR /app

COPY . /app

RUN npm i --legacy-peer-deps && npm run build

COPY nginx.conf /root/nginx.conf    

EXPOSE 3000

COPY entrypoint.sh /sbin/entrypoint.sh
RUN chmod 755 /sbin/entrypoint.sh
ENTRYPOINT ["/sbin/entrypoint.sh"]