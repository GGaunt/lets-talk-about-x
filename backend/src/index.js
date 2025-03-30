const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// import { test } from './models/authenticator.js';
// const authenticator = require('./models/authenticator.js');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL username
    password: '', // Change this to your MySQL password
    database: 'lets-talk-about-x', // Change this to your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Simple route to fetch data
app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Simple route to fetch data
app.get('/posts', (req, res) => {
    db.query('SELECT user.id user_id, user.username, user_post.id post_id, user_post.content FROM user JOIN user_post ON user.id = user_post.user_id WHERE deleted_at is NULL;', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// authenticator.test();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

