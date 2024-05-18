const http = require('http');

const server = http.createServer((req, res) => {
    // Handle CORS preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        // Set headers to allow cross-origin requests
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Length': '0'
        });
        res.end();
    } else if (req.url === '/hello' && req.method === 'GET') {
        // Handle GET requests to /hello endpoint
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    } else {
        // Handle other requests with a 404 Not Found response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
