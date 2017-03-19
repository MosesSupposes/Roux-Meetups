const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <head>
            <link rel="stylesheet" type="text/css" href="css/style.css">
        </head>
        <body>
            <h1>Welcome to Roux Academy!</h1>
            <img src="/images/misc/background.jpg" alt="background" style="height: 300px">
            <p>Roux Academy Meetups puts together artists from all walks of life</p>
            <script src="/reload/reload.js"></script>
        </body>
    `);
});

module.exports = router;
