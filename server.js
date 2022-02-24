import {coinFlip, coinFlips, countFlips, flipACoin} from "./coin.mjs"
import express from "express"
import minimist from "minimist"

// Require Express.js
const app = express()
const args = minimist(process.argv.slice(2))
args["port"];
var HTTP_PORT = args.port || 5000;


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

app.get('/app/flip/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end('{"flip":"' + coinFlip() + '"}')
    });

app.get('/app/flips/:number', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    const flips = coinFlips(req.params.number)
    const count = countFlips(flips)
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end('{"raw":[' + flips + '],"summary":' + count + "}")
    });

app.get('/app/flip/call/:guess(heads|tails)/', (req, res) => {
    const game = flipACoin(req.params.guess)
    res.status(200).json(game)
})    

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});
