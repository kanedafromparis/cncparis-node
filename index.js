const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, res) => res.send(`
  <html>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
        <title>I love Openshift/kubernetes</title>
        <meta http-equiv="refresh" content="5" >
    <head>
    
    </head>
  <body>
    <h1>Hello mon ami</h1>
    <img src="/public/logo_cncf_0002.png" />
  </body>
  </html>

`));

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(8080);
