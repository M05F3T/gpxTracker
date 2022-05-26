const settings = require('./js/settings.js');
const gpxHandler = require('./js/gpxHandler.js');
const fs = require('fs');

const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const server = require('http').Server(app);

gpxHandler.convertGpxToJsonFile("run");


let raw = fs.readFileSync("./database/jsonData/run.json")
let jsonFile = JSON.parse(raw);


app.get('/', function (req, res) {
    res.sendFile(__dirname + settings.servThisFile);
});

app.get('/json', function (req, res) {
    res.json(jsonFile);
});

//User can accses all files in /client (ex: http://www.hostwebsite.com/client/img.jpg)
app.use('/client', express.static(__dirname + settings.allowAccessTo));

//listen to port specified in settings.
server.listen(settings.PORT);
