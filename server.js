var http = require("http");
var prompt = require("prompt");
// var document = require("document");

http.createServer(function(request, response, document) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  // var greeting = prompt("Tell me your name");
  response.write("Hello there I'm a robot!");
  response.write(" Can I keep writing like this?");
  response.end();
  document.write("It's been really great, but I've got to go");


}).listen(8888);

// prompt.start();
// prompt.get("name", function (err, result, response) {
//   response.write("your name is ", result.name);
//   response.end();
// });
