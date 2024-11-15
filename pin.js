const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Correct PIN stored on the server
const correctPin = "123456"; // Change this PIN as needed

// Endpoint to validate the PIN
app.post('/validate-pin', (req, res) => {
    const { pin } = req.body;

    if (pin === correctPin) {
        res.json({ valid: true }); // PIN is valid
    } else {
        res.json({ valid: false }); // PIN is invalid
    }
});

// Serve static files (for the frontend)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});