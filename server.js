const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        status: 'ok',
        service: 'nimbus-deployment-test',
      }),
    );

    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  res.end(`
    <html>
      <head>
        <title>Nimbus Deployment Test</title>
      </head>
      <body>
        <h1>Nimbus Deployment Test-3</h1>
        <p>Deployment successful for test 3.</p>
      </body>
    </html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Test application listening on port 3000');
});
