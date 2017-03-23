const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const feedbackData = require('../data/feedback.json');

router.get('/api', (req, res) => {
    res.json(feedbackData)
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', (req, res) => {
    feedbackData.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf-8', err => {
        if (err) { console.log(err) };
    });
    res.json(feedbackData);
});

router.delete('/api/:id', (req, res) => {
    feedbackData.splice(req.params.id, 1);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf-8', err => {
        if (err) { console.log(err) };
    });
    res.json(feedbackData);
});

module.exports = router; 
