const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];

    // Combine images of all speakers into a single array(pagePhots).
    data.speakers.forEach(item => pagePhotos = pagePhotos.concat(item.artwork))

    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });
});

module.exports = router;
