const express = require('express');
const app = express();

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

// Example route that throws an error
app.get('/error-route', (req, res) => {
    throw new Error('This is a test error!');
});

// Middleware to catch all errors (must be after all routes)
app.use((err, req, res, next) => {
    const errorDetails = {
        type: 'serverError',
        message: err.message,
        stack: err.stack,
        route: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
    }; 

    // Send the error to your server (replace URL with your own)
    fetch('https://foremost-sweltering-dew.glitch.me/error-handler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorDetails)
    }).catch(error => console.error('Error reporting failed:', error));

    // Respond to the client with a generic error message
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
