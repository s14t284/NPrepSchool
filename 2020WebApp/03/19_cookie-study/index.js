"use strict";
const http = require("http");
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader("Set-Cookie", "last_access=" + now + ";");
  const last_access_time = req.headers.cookie
    ? parseInt(req.haeders.cookie.split("last_access=")[1])
    : now;
  res.end(req.headers.cookie);
});

const port = 8000;
server.listen(port, () => {
  console.log("Listning on " + port);
});
