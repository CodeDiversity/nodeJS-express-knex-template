const express = require('express');
const cors = require('cors')

const db = require('./database/dbConfig.js')

const server = express();

server.use(express.json());
server.use(cors());


// basic get request to test if server is up 
server.get('/', (req, res) => {
  res.send("It's alive");
});



server.listen(3300, () => console.log('\nrunning on port 3300\n'));