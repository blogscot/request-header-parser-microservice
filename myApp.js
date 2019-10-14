const express = require("express");
const app = express();

const parseHeader = req => ({
  ipaddress: (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null)
  ).split(",")[0],
  language: req.headers["accept-language"],
  software: req.headers["user-agent"]
});

app.get("/api/whoami", (req, res) => res.json(parseHeader(req)));

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
