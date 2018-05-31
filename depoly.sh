docker stop ningbo-subway \
; docker rm ningbo-subway \
; cd /app/ningbo-subway \
&& sudo git pull \
&& docker build -t ningbo-subway . \
&& docker run -e TZ="Asia/Shanghai" -d -p 16111:3000 --name ningbo-subway ningbo-subway
