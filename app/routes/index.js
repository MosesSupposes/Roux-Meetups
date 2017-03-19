const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send(`
        <h1>Welcome</h1>
        <p>Roux Academy Meetups puts together artists from all walks of life</p>
    `);
});

module.exports = router;
