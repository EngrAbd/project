const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'abdulkarim', // Replace with your MySQL password
  database: 'project' // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Handle login request
app.post('/login', (req, res) => {
  const { voterNumber, password } = req.body;

  const query = 'SELECT * FROM users WHERE voterNumber = ? AND password = ?';
  connection.query(query, [voterNumber, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Handle forgot password request
app.post('/forgot-password', (req, res) => {
  const { name, dob, resetVoterNumber } = req.body;

  const query = 'SELECT * FROM users WHERE name = ? AND dob = ? AND voterNumber = ?';
  connection.query(query, [name, dob, resetVoterNumber], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Details verified. Proceed with password reset.' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid details' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});