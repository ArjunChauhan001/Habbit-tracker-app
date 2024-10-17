const cron = require('node-cron');
const User = require('../models/user');
const Habit = require('../models/Habit.js');
const nodemailer = require('nodemailer'); // Use for email notifications

// Schedule a task to run every day at 9 AM
cron.schedule('0 9 * * *', async () => {
  try {
    const users = await User.find();
    users.forEach(async (user) => {
      const habits = await Habit.find({ user: user._id });
      console.log(`Sending reminder to ${user.email}`);
    });
  } catch (error) {
    console.error('Error sending reminders', error);
  }
});

module.exports = cron;
