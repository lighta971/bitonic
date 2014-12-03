Bitonic - La Nuit de l'info Team :D
===================


Installation
-------------
**Requirements:**

Install FIG at fig.sh

install docker

install docker-enter

Get source
`$ git clone http://the.repository`

`$ cd repository`


Create data directory for mongo & mysql

`$ mkdir -p tmp/mongo && mkdir -p tmp/mysql`


Install MYSQL

`$ cd docker && fig up`


Into another terminal

`$ docker-enter docker_mysql_1`


`$ mysql_install_db && supervisorctl restart mysql`


`$ mysql -uroot -e "GRANT ALL PRIVILEGES ON *.* TO 'dev'@'%' IDENTIFIED BY '' WITH GRANT OPTION; FLUSH PRIVILEGES;"`


Finaly

`$ exit `

Enable configuration file

`$ cd repository && cp config.json.sample config.json`


Usages
-------------------------

Mysql

http://localhost:81/phpmyadmin



Node

http://localhost

terminal: `$ docker-enter docker_node_1`


Troubleshooting
-----------------------

mysql can't run
sudo ln -s /etc/apparmor.d/usr.sbin.mysqld /etc/apparmor.d/disable/
sudo apparmor_parser -R /etc/apparmor.d/usr.sbin.mysqld

