"use strict";
const pug = require("pug");
const util = require("./handler-util");
const contents = [];
function handle(req, res) {
  switch (req.method) {
    case "GET":
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(pug.renderFile("./views/posts.pug", { contents: contents }));
      break;
    case "POST":
      let body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          // URIデコード
          const decoded = decodeURIComponent(body);
          const content = decoded.split("content=")[1];
          console.info("投稿されました: " + content);
          contents.push(content);
          console.info("これまでに投稿された内容: " + contents);
          handleRedirectPosts(req, res);
        });
      break;
    case "PUT":
      util.handleBadRequest(req, res);
      break;
    default:
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    // 303 - See Other POSTでアクセスした際にGETでも同じパスにアクセスし直すときに使う
    Location: "/posts",
  });
  res.end();
}

module.exports = {
  handle,
};
