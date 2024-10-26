# Run in Docker

1. Create `fullchain.pem` & `privkey.pem` in same directory

2. `docker build -t technoed-hack-frontend . `

3. `docker run -d --name nginx -p 80:80 -p 443:443 technoed-hack-frontend`
