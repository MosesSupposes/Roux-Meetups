const express = require('express');
const app = express()

const server = app.listen(3000, () => {
    console.log('Listening on port 3000');
})

app.get('/', (req,res) => {
    res.send('<h1>Roux Academy Meetups</h1>');
});

