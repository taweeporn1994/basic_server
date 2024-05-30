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
    lsof -i -P -n | grep LISTEN
Check nginx
    service nginx start