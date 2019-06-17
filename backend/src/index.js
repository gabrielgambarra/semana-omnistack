const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const dir = './uploads/resized';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'));

server.listen(5000);