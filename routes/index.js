'use strict';

const express = require('express');
const RequestController = require('../controllers/request');
const UserController = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();

// REQUEST
api.get('/request', RequestController.list);
api.get('/request/:requestId', RequestController.get);
api.post('/request', RequestController.insert);
api.put('/request/:requestId', RequestController.update);
api.delete('/request/:requestId', RequestController.remove);

// USER
// api.post('/signup', UserController.signUp);
// api.post('/signin', UserController.signIn);

module.exports = api;
