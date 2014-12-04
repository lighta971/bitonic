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


Install MYSQL

`$ cd docker && fig up`


`$ docker-enter docker_mysql_1`


`$ mysql_install_db && supervisorctl restart mysql`


`$ mysql -uroot -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION; FLUSH PRIVILEGES;"`


Finaly

`$ exit `

Usages
-------------------------

Mysql

http://localhost:81/phpmyadmin



Node

http://localhost

terminal: `$ docker-enter docker_node_1`


Troubleshooting
-----------------------

*Mysql can't run* (https://github.com/docker/docker/issues/4704#issuecomment-64021810=

`sudo ln -s /etc/apparmor.d/usr.sbin.mysqld /etc/apparmor.d/disable/`

`sudo apparmor_parser -R /etc/apparmor.d/usr.sbin.mysqld`

