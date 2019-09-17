'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db , (err, res) => {
    if (err) {
        return console.log (`Erro to connect Database: ${err}`);
    }

    console.log ('Connection Database Start');

    app.listen(config.port , () => {
        console.log ('API REST');
    })
})
