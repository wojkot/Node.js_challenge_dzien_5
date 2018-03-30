//Twój kod

const express = require('express');

const app = express();

let voteYes = 0;
let voteNo = 0;
let voteTotal = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:actualvote', (req, res) => {
    const vote = req.params.actualvote;
    if (vote === 'yes') {
        voteYes++;
    }
    else if (vote === 'no') {
        voteNo++;
    }
    voteTotal++;
    res.send("Dziękujemy za oddanie głosu.");
});


app.get('/votes/check', (req, res) => {
    res.send("Tak: " + voteYes + " Nie: " + voteNo + " To się okaże: " + (voteTotal - voteNo - voteYes));
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
});