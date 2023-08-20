const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');

//EJS SETUP
app.set('view engine', 'ejs');
// Set the path to the views directory
app.set('views', 'views');

app.get('/register', (req, res)=>{
    res.render('register');
})

app.get('/secret', (req, res)=>{
    res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN!');
});

app.listen(3000, ()=>{
    console.log('Serving on port 3000');
});

