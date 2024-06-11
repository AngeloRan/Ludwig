#!/bin/bash
cp /root/nginx.conf /etc/nginx/nginx.conf

ORIGIN="$2"

if [ "$1" == 'start' ]; then

    # node init
    export ORIGIN="$ORIGIN" 
    
    cd /app
    rm -rf dist
    npm i
    npm install react-icons
    npm run build
    npm install -g serve

    if [ "$#" -ge 3 ]; then
        serve -s dist &
        DOMAIN="$3"
        sed -i "s/SERVERNAME/$DOMAIN/g" /etc/nginx/nginx.conf  
        sleep 3 
        service nginx start 
        
    else
        serve -s dist     
    fi
    exec "$@"
fi

if [ "$1" == 'bash' ]; then
    /bin/bash
fi

# workaround when nginx is not started tail -f /dev/null