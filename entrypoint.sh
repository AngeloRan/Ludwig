cp /root/nginx.conf /etc/nginx/nginx.conf

ORIGIN="$2"

if [ "$1" == 'start' ]; then

    # node init
    export ORIGIN="$ORIGIN" 
    
    cd /app
    node build/index.js &

    if [ "$#" -ge 3 ]; then
        DOMAIN="$3"
        sed -i "s/SERVERNAME/$DOMAIN/g" /etc/nginx/nginx.conf && \
        sleep 3 && service nginx start & \
    fi


if [ "$1" == 'bash' ]; then
    /bin/bash
fi