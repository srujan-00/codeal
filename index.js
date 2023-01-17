const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(expressEjsLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) {
        console.log(`Oops! an error ${err} occured while trying to run the server`);
        return;
    }
    console.log(`The server is up and running on port ${port}`);
    return;
});