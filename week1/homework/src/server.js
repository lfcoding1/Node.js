'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;


  

  const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    switch (request.url){
      case '/state':
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify( {state: state}));
        break;
      case '/add':
        state++
         response.writeHead(200, {'Content-Type': 'application/json'});
         response.end(JSON.stringify( {state: state}));
         break;
      case '/subtract':
        state--;
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify( {state: state}));
        break;
      case '/reset':
        response.writeHead(200, {'Content-Type': 'application/json'});
        state = 10;
        response.end(JSON.stringify( {state: state}));
        break;
      default:
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify( {error: 'Not found'}));
    }
  });


      
     
  return server;
  

} //end function createserver

module.exports = {
  createServer
};





