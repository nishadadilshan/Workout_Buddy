const express = require("express");
const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all Workouts" });
});

//GET single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new Workouts" });
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
