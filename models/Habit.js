const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
  streak: { type: Number, default: 0 },
  progress: [{ date: Date, completed: Boolean }]
});

module.exports = mongoose.model('Habit', HabitSchema);
