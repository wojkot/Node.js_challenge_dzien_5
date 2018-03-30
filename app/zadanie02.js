//Twój kod

const express = require('express');

const app = express();
let name = null;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send("Set name: " + name);
});

app.get('/name/show', (req, res) => {
    res.send("Your name is " + name);
});

app.get('/name/check', (req, res) => {
    if (name === null) {
        res.send("Name not set");
    }
    else {
        res.send("Name set: " + name);
    }

});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});