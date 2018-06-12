import { renderToString } from 'react-dom/server';
import express from 'express';
import React, { Component } from 'react';
import Configuration from './Configuration';
import hbs from 'express-hbs';

let app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    const html = renderToString(<Configuration data={123}/>);
    return res.render('index', {body: html});
});

app.listen(3001, () => console.log('Listening...'));