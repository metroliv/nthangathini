const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this port number if needed

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let chatMessages = [];
let members = [];
let events = [];

// Serve static files (assuming your HTML, CSS, and JS files are in a 'public' directory)
app.use(express.static('public'));

// Your existing routes
app.get('/', (req, res) => {
    res.sendFile('index.html'); // Update with your HTML file name
});

app.post('/api/addEvent', (req, res) => {
    const { title, date } = req.body;
    const post = { title, date };
    events.push(post);
    console.log(events);
    res.json({ success: true });
});

// Add more routes for other functionalities

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
