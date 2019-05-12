const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Rotas
const index = require('./routes/index');
const CharacterRoute = require('./routes/CharacterRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/uploads', express.static(process.cwd() + '/uploads'))

app.use('/', index);
app.use('/characters', CharacterRoute);

module.exports = app;