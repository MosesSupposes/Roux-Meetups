const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    // Combine images of all speakers into a single array(pagePhots).
    data.speakers.forEach(item => pagePhotos = pagePhotos.concat(item.artwork))

    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'home'
    });
});

module.exports = router;
