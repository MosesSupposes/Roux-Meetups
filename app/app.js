const datafile = require('./data/data.json');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
    let info = '';
    datafile.speakers.forEach(item => {
        info += `
        <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
        </li>
        `
    }); 
    res.send(`
        <h1>Roux Academy Meetups</h1>
        ${info}
    `);
});

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})

