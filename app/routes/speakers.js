const express = require('express');
const router = express.Router();

router.get('/speakers', (req,res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    // Combine images of all speakers into a single array(pagePhots).
    data.speakers.forEach(item => pagePhotos = pagePhotos.concat(item.artwork))

    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakers'
    });
});

router.get('/speakers/:speakerid', (req,res) => {
    let dataFile = req.app.get('appData');
    let speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <h1>Welcome</h1>
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="background" style="height: 300px">
        <p>${speaker.summary}</p>
        <script src="/reload/reload.js"></script>

    `);
});

module.exports = router;
