const express = require('express');
const router = express.Router();
const feedbackData = require('../data/feedback.json');

router.get('/api', (req, res) => {
    res.json(feedbackData)
});

module.exports = router;
