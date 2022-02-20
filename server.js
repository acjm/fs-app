const http = require("http");
const routes = require("./routes");

const PORT = 8888;

const server = http.createServer(routes);

server.listen(PORT, () => {
  console.log("listening to the server on port 7777");
});
