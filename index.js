require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 4321;

server.listen(port, () => {
    console.log(`Off to the races from port ${port}`);
});