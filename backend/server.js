require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//workout routes
app.use("/api/workout", workoutRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on ports", process.env.PORT);
});
