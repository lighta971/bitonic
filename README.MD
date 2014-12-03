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

`$ cd docker && fig run mysql`


`$ docker-enter docker_mysql_run_1`


`$ mysql_install_db && supervisorctl restart mysql`



Install root user

 - Go to localhost:81/phpmyadmin (root - empty password)

 - Click on SQL and copy paste:

 `GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' 
    IDENTIFIED BY '' 
    WITH GRANT OPTION;
FLUSH PRIVILEGES;`



Finaly

`$ exit `

Enable configuration file

`$ cd ../ && cp config.json.sample config.json`

Run application

` $ fig up`




Mysql

http://localhost:81/phpmyadmin



Node

http://localhost

terminal: `$ docker-enter docker_node_1`

