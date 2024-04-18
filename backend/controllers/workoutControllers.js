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

  let emptyFeild = [];
  if (!title) {
    emptyFeild.push("title");
  }
  if (!reps) {
    emptyFeild.push("reps");
  }
  if (!load) {
    emptyFeild.push("load");
  }
  if (emptyFeild.length > 0) {
    res
      .status(400)
      .json({ error: "Please fill in all the feilds", emptyFeild });
  } else {
    //add doc to db
    try {
      const workout = await Workout.create({ title, reps, load });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout to delete" });
  }
  //delete doc
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No such workout to delete" });
  }

  res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout to update" });
  }

  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body, // whatever the thing that coming from the req body they will spread the properties of the object
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "No such workout to update" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
