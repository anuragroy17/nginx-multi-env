#!/bin/sh

# Run envsubst to replace variables in the config.temp.js file and save it as config.js
envsubst < /usr/share/nginx/html/assets/config.temp.js > /usr/share/nginx/html/assets/config.js

# Start the nginx server with 'daemon off;'
exec nginx -g 'daemon off;'