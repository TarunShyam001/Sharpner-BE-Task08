const http = require('http');

const route = require('./routes');

const server = http.createServer(route);

const PORT = 8200;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
