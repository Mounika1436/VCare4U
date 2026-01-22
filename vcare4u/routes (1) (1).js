const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('./database'); // Import your database connection
const router = express.Router();

// Serve Test Pages
router.get('/tests.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/tests.html'));
});

router.get('/anxiety_test.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/anxiety_test.html'));
});

router.get('/depression_test.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/depression_test.html'));
});

router.get('/bipolar_test.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/bipolar_test.html'));
});

router.get('/schizophrenia_test.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/schizophrenia_test.html'));
});

// Handle Feedback Submission
router.post('/submit-feedback', (req, res) => {
    const { name, email, message } = req.body;
    // Here, you can insert the feedback into your database
    // For simplicity, we'll just log it
    console.log(`Feedback received from ${name} (${email}): ${message}`);
    res.send('Thank you for your feedback!');
});

// Additional Routes for Login, Registration, Dashboard, etc.
// You can expand this based on your project requirements

module.exports = router;

