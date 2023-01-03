const express = require('express');
const app = express();
const port = 8000;


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