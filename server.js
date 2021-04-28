const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser Middleware

app.use(express.json());

// DB Congig

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`))

