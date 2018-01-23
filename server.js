const express = require('express');
const path = require('path');
const app = express();
var Log = require('log')
  , log = new Log('info');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.get('/', (req, res) => {
    log.info('ping');
    res.send(`
  <html>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
        <title>Local changes</title>
        <meta http-equiv="refresh" content="5" >
    <head>
    
    </head>
  <body>
    <h1>Hello</h1>
    <!-- img src="/public/logo_cncf_0001.png" / -->
  </body>
  </html>
`)});

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(server_port, server_ip_address);
