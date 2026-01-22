const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, JS, images, HTML) from the "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Example route for serving the feedback page
app.get('/tests.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'tests.html'));
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
