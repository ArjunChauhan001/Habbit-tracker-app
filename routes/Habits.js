const express = require('express');
const Habit = require('../models/Habit');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a new habit
router.post('/', auth, async (req, res) => {
  const { name, frequency } = req.body;
  try {
    const habit = new Habit({ user: req.user.userId, name, frequency });
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: 'Error creating habit' });
  }
});

// Get all habits for a user
router.get('/', auth, async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.userId });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching habits' });
  }
});

// Update a habit
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { name, frequency } = req.body;
  try {
    const habit = await Habit.findByIdAndUpdate(id, { name, frequency }, { new: true });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: 'Error updating habit' });
  }
});

// Delete a habit
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    await Habit.findByIdAndDelete(id);
    res.json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting habit' });
  }
});

module.exports = router;
