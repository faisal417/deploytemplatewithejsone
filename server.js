
//require
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const pageRoutes = require('./routes/pageRoutes');


// setup environment
dotenv.config();
const port = process.env.PORT || 4040;

//init express
const app = express();

//data manage
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//init ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/app')

//static folder
app.use(express.static('public'));

//route
app.use(pageRoutes)

//server listener
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.bgYellow.red);
})

