require('env2')('.env');
const express = require('express');
const compression = require('compression');
const {join} = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

app.use((req, res)=>{
  res.status(404).redirect('/errors/404');
});

app.use((err, req, res)=>{
  res.status(500).redirect('/errors/500');
});

module.exports = app;
