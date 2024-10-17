const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

// Get all users (admin only)
router.get('/users', [auth, admin], async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

// Create habit templates (admin only)
router.post('/habit-templates', [auth, admin], async (req, res) => {
  const { name, frequency } = req.body;
  const template = new Habit({ name, frequency });
  await template.save();
  res.json(template);
});

module.exports = router;
