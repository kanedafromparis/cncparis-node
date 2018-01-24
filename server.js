const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
var Log = require('log')
  , log = new Log('info');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server_setcookie = process.env.OPENSHIFT_COOKIE_NAME;

log.info('process.env.OPENSHIFT_COOKIE_NAME :'+process.env.OPENSHIFT_COOKIE_NAME);


app.get('/', (req, res) => {
    log.info('ping : '+os.hostname()+" : " +JSON.stringify(req.headers));
    
    if(typeof server_setcookie !== 'undefined' && server_setcookie){
      res.cookie('server_setcookie', '1', { expires: new Date(Date.now() + 900000)});
    }
    res.send(`
  <html>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
        <title>Local changes</title>
        <meta http-equiv="refresh" content="5" >
    <head>
    
    </head>
  <body>
    <h1>Hello</h1>`+JSON.stringify(req.headers)+`
  </body>
  </html>
`)});

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(server_port);
