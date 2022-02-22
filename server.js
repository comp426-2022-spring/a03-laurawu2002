import {coinFlip, coinFlips, countFlips, flipACoin} from "./coin.mjs"
// Require Express.js
const express = require('express')
const app = express()

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
    });

app.get('/app/flips/', (req, res) => {
    res.statusCode = 200;
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end('"flip":"' + coinFlip() + '"}')
    });

app.get('/app/flips/:number', (req, res) => {
    const flips = coinFlips(req.params.number)
    const count = countFlips(flips)
    res.statusCode = 200;
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end('{"raw":[' + flips + '],"summary":' + count + "}")
    });

app.get('/app/flip/call/heads', (req, res) => {
    res.statusCode = 200;
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(flipACoin('heads'))
});

app.get('/app/flip/call/tails', (req, res) => {
    res.statusCode = 200;
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(flipACoin('tails'))
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});
