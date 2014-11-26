var http = require('http');
var port = 3000;
  
http.createServer(function(req,res){
  var random_time = 1000 + getRandomNumber(2000);
  var random_num  = 1 + getRandomNumber(9);
  setTimeout(function(){
    res.writeHead(200,{'Content-Type':'text/plain', 'Access-Control-Allow-Origin': 'null'});
    res.end("" + random_num);
  }, random_time);
}).listen(port, function(){
  console.log('server listen on ', port);
});

function getRandomNumber(limit) {
  return Math.round(Math.random() * limit);
}