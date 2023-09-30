

const simulatesProcessing  = async () => {
  let j = 0
  let n = 10**8
  for (let i = 0; i < n; i++) {
    if (i == n - 1) {
      i = 0
      if (j == 1000) {
        break
      }
      j++
    }
  }
  console.log('processing done')
}

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  if (req.url === '/') {
    simulatesProcessing()
    res.write('Hello World!'); //write a response to the client
  } else if (req.url === '/about') {
    res.write('about'); //write a response to the client
  }
  res.end(); //end the response
}).listen(8080);