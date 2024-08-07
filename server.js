const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const routes = require('./route/routes');

// Connect to MongoDB
mongoose.connect('mongodb+srv://manishjadhav:ynqMlL7tXzwp5O3V@manish.n3sv21u.mongodb.net/?retryWrites=true&w=majority&appName=Manish')
    .then(() => console.log('Successfully connected to DB'))
    .catch(err => console.error("Error connecting to DB:", err));

// Middleware
app.use(express.json());

// Routes
app.use(routes);

// Start Server
app.listen(9992, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log("Server started on port number 9992");
    }
});
