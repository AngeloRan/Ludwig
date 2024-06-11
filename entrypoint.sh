#!/bin/bash
cp /root/nginx.conf /etc/nginx/nginx.conf

ORIGIN="$2"

if [ "$1" == 'start' ]; then

    # node init
    export ORIGIN="$ORIGIN" 
    
    exec cd /app
    exec rm -rf dist
    exec npm i
    exec npm install react-icons
    exec npm run build
    exec npm install -g serve

    if [ "$#" -ge 3 ]; then
        exec serve -s dist &
        DOMAIN="$3"
        exec sed -i "s/SERVERNAME/$DOMAIN/g" /etc/nginx/nginx.conf  
        exec sleep 3 
        exec service nginx start 
        
    else
        exec serve -s dist     
    fi
fi

if [ "$1" == 'bash' ]; then
    /bin/bash
fi

# workaround when nginx is not started tail -f /dev/null