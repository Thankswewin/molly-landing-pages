const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve all static files from the landing directory
app.use(express.static(path.join(__dirname), {
    extensions: ['html'],
    maxAge: '1h'
}));

// Route for specific assets 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use('/icon.png', express.static(path.join(__dirname, 'icon.png')));

// SPA fallback — always serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Landing page running on port ${PORT}`);
});
