const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

// Array of users
const users = [
  { username: 'admin', password: 'password', name: 'Admin User', surname: 'Admin', phone: '123-456-7890' },
  { username: 'user1', password: 'password1', name: 'Teja', surname: 'Teja', phone: '234-567-8901' },
  { username: 'user2', password: 'password2', name: 'Ram', surname: 'Ram', phone: '345-678-9012' }
];

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json(user);
  } else {
    res.status(401).send('Invalid credentials!');
  }
});

app.get('/logout', (req, res) => {
  res.clearCookie('user'); // Clear user cookie
  res.redirect('/'); // Redirect to the login page
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
