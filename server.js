const express = require('express');

const app = express();

const connectDB = require('./config/db');

const Student = require('./models/SchemaOne')

app.get("/", (req, res) => {
  res.json({message: 'Welcome to the contact keeper APT...'});
});

app.post("/students", (req, res) => {
  res.json({message: 'Welcome to the contact keeper APT...'});
});


// Connect Database
connectDB()

//init Middleware
app.use(express.json({ extended: false}));

// Define routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/contacts', require('./routes/contacts'));
// app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})