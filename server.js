
//파일을 가져온다

const http = require('http');

//서버를 만든다
const server = http.createServer(function(request,response){
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  
  const mainPage = require('./module/html.js');
  console.log(mainPage);
  
  response.write(mainPage);
  //response.write('test');
  response.end();
});

server.listen(2080, function(error){
  if(error){
    console.error("It's not working");
  }else{
    console.log("It's working");
  }
});