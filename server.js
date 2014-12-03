var http = require("http");
var mysql = require("mysql");

var nconf = require('nconf');
var configs = nconf.file({ file: 'config.json' });

var connection = mysql.createConnection({
  host     : nconf.get('mysql_host'),
  user     : nconf.get('mysql_user'),
  password : nconf.get('mysql_password'),
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('mongoose worked fine !!!!')
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



var server = http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page 1</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World! 2");
  response.write("</body>");
  response.write("</html>");
  response.end();
});
 
server.listen(80);
console.log("Server is listening");
