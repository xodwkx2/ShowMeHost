'use strict';

const os = require('os');
const express = require('express');

// 상수
const PORT = 8081;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send(`Your app is running on Host : ${os.hostname()}\r\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
