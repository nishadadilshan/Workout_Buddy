const express = require("express");
const router = express.Router();
const Workout = require("../module/workoutModule");

//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all Workouts" });
});

//GET single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ message: "Post a new Workouts" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a Workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a Workout" });
});

module.exports = router;
