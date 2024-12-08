const http = require('http');

const requestListener = (request, response) => {
  return new Promise((resolve, reject) => {
    try {
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200);
      response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
      resolve();
    } catch (error) {
      reject(error);
    }
  })
  .catch(error => {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  });
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//added promise handling to prevent crashes