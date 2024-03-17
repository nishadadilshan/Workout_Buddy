const express = require("express");
const router = express.Router();

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
} = require("../controllers/workoutControllers");

//GET all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a Workout" });
});

module.exports = router;
