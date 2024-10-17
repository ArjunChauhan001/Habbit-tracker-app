const express = require('express');
const connectDB = require('./config/db');
const envVars = require('./config/envVars');
const cron = require('./cron/reminder.js');
const authRoutes = require('./routes/auth');
const habitRoutes = require('./routes/habits');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/admin', adminRoutes);

// Connect Database
connectDB();

app.get('/', (req, res) => {res.send('Hello World!');})

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runnig on http://localhost:${port}`);
})