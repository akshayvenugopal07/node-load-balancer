const app = require('express')();

// API endpoint
app.get('/', (req, res) => {
    res.send("Welcome to Akshays Test app !");
})

// Launching application on several ports
app.listen(3000);
app.listen(3001);
app.listen(3002);
app.listen(3003);
