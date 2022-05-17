const settings = require('./js/settings.js');
const express = require('express');
const app = express();
const server = require('http').Server(app);

startExpress(settings.servThisFile,settings.allowAccessTo);


function startExpress(filePath, directoryPath) {
    // in case user tries to get "http://www.hostwebsite.com/" we send index.html
    app.get('/', function (req, res) {
        res.sendFile(__dirname + filePath);
    });

    //User can accses all files in /client (ex: http://www.hostwebsite.com/client/img.jpg)
    app.use('/client', express.static(__dirname + directoryPath));

    //listen to port specified in settings.
    server.listen(settings.PORT);

    console.log(`server started on PORT:${settings.PORT}`);
}