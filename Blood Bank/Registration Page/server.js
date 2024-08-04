const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blood_bank'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Handle registration
app.post('/register', async (req, res) => {
    const { firstName, lastName, dob, gender, registerAs, email, password, retypePassword } = req.body;

    // Validate data
    if (password !== retypePassword) {
        return res.status(400).send('Passwords do not match.');
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if (!passwordPattern.test(password)) {
        return res.status(400).send('Password must be at least 7 characters long, include letters, numbers, and symbols.');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (firstName, lastName, dob, gender, registerAs, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, dob, gender, registerAs, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.send('User registered successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
