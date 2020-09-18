#! /usr/bin/env node
const createServer = require('../src/index');

createServer().listen(5000, () => {
  console.log('server port 5000');
  console.log('http://127.0.0.1:5000');
});
