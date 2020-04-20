const express = require("express")

const server = express();

const usersRouter = require('../users/users-router.js')
const authRouter = require('../auth/auth-router.js');
server.use(express.json());

server.get('/api/users', usersRouter);
server.get('/api/auth', authRouter);


module.exports = server;