const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  rl.question(`What's your name?`, name => {
    fetch('https://api-adresse.data.gouv.fr/search/?q=' + name)
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    }); 
    rl.close();
  });
});