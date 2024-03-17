const Workout = require("../module/workoutModule");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

// get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// create new workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  //add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete workout

// update workout

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
};
