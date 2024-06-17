# Infrastructure
Fontend => nginx.conf.fe

# basic_server
http://192.168.114.33:8080/
http://192.168.114.35:8080/
http://192.168.114.38:8080/

# Prepare env
- Install vm virtual box
- Download linux image(ubuntu 24.04)
- Import linux image to vm
- In vm install git(sudo apt install git)
- In vm install net-tools(sudo apt install net-tools)
- Install node(sudo apt install nodejs)
- Install npm(sudo apt install npm)
- Clone project for test(https://github.com/taweeporn1994/basic_server.git)
- sudo apt install openssh-client(https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/)
- Set root (sudo passwd root)
- Allow ssh(https://www.cyberciti.biz/faq/how-to-install-ssh-on-ubuntu-linux-using-apt-get/)

# Linux CMD
List port status
    lsof 
Check nginx
    service nginx status
    service nginx stop
    service nginx start
    service nginx restart
    nginx -t
    nginx -s reload


   server {
        listen 8080;
   }
   upstream ourservers {
        server   192.168.10.111:8000;
        server   192.168.10.114:8000;
        server   192.168.10.113:8000  down;
    }


เครื่อง bot 2 เครื่องนี้เหมือนกัน
http://192.168.10.111:8000/docs#/
http://192.168.10.114:8000/docs#

ทดสอบด้วยการดึง root ก็ได้

     upstream backend {
          least_conn;
          server   192.168.10.111:8000;
          server   192.168.10.114:8000;
          server   192.168.10.113:8000  down;
     }
Fontend
http://192.168.10.120:5173/login
http://192.168.10.220:5173/login
http://192.168.10.190/login


# Mac install nginx
rm -rf nginx.conf   
cp /Users/taweeporn/Desktop/Home/RTAF/GitLab_Project/basic_server/nginx.conf .
brew services stop nginx
brew services start nginx
https://www.javatpoint.com/installing-nginx-on-mac
 - brew update  
 - brew install nginx
 brew services info nginx
 brew services list
 brew services start nginx
 brew services stop nginx
 nginx -s quit   


deafult using port 8080  
Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/
Default listen address -> http://localhost:8080
==> nginx
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/nginx/bin/nginx -g daemon\ off\;