# install mongoDb
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
https://github.com/codemobiles/cmmongodb_replica_failover_demo/blob/main/readme.txt
     sudo systemctl start mongod
     sudo systemctl status mongod
     mongosh
     ps -ef | grep mongod
     sudo lsof -i -P -n | grep LISTEN
     ufw allow port(install ufw)
     -> set mongo Connecting to a remote mongoDB server (https://stackoverflow.com/questions/58323458/connecting-to-a-remote-mongodb-server)
     bind_ip = 127.0.0.1,192.168.1.5
     sudo systemctl restart mongod
     dbpath /var/lib/mongodb
# mongodb replica set
     https://docs.rocket.chat/setup-and-configure/environment-configuration/mongodb-configuration/configure-a-replica-set-for-mongodb
     replication: // indicates the beginning of the replication configuration section
          replSetName: "rs01"
     rs.initiate(
          {
               _id: "rs01",
               version: 1,
               members: [
                    { _id: 0, host : "xxx.xxx.xx.xxx:27017" },
                    { _id: 1, host : "xxx.xxx.xx.xxx:27017" },
                    { _id: 2, host : "xxx.xxx.xx.xxx:27017" }
               ]
          }
     )

# install ufw
     sudo apt-get install ufw
     ufw app list
     sudo ufw enable
     ufw allow 27017
     sudo ufw status verbose

     to allow any machine connect mongo set this in /etc/mongod.conf 
            port: 27017
            bindIp: 0.0.0.0
# ssh
     https://www.cyberciti.biz/faq/how-to-install-ssh-on-ubuntu-linux-using-apt-get/
# แก้ไขให้ต่อเน็ต
     sudo nano /etc/resolv.conf
     แก้ไขไฟล์ เพิ่ม port แล้ว save
     nameserver 8.8.8.8
     nameserver 8.8.4.4
     nameserver 127.0.0.53
     search Home