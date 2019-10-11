const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}));

app.get('/', function (req, res) {
    res.send('Hello World.');
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("http://%s:%s", host, port)

});

module.exports = app;
