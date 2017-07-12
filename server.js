const express = require('express');
const path = require('path');
const app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080


app.get('/', (req, res) => res.send(`
  <html>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
        <title>I love Openshift/kubernetes for with love</title>
        <meta http-equiv="refresh" content="5" >
    <head>
    
    </head>
  <body>
    <h1>Hello</h1>
    <!-- yet another so silly modification -->
    <img src="/public/logo_cncf_0003.png" />
  </body>
  </html>
`));

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(server_port);
