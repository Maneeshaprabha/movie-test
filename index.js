const express = require("express");
const app = express();
var path = require("path");

const basePath = __dirname;
const staticFilesPath = path.join(basePath, 'build');

app.use(express.static(staticFilesPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

function startServer() {
  app.listen(8085, '0.0.0.0', () => {
    console.log(`Worker ${process.pid} running on http://localhost:${8085}`);
  });
}

startServer();