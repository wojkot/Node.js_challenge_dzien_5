//Twój kod

const express = require('express');

const app = express();

app.get('/', (req, res) => { 
    res.send('Hello, World!');
});

app.get('/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.send(req.params.num1 + " + " + req.params.num2 + " = " + (num1 + num2));
});

app.listen(3000, () => {
    console.log("Server run on 3000 port");
});