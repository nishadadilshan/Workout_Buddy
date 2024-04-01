import React from "react";

export default function WorkoutDetails({ workout }) {
  return (
    <div
      className="workout-details"
      style={{
        borderRadius: "8px",
        borderBottom: "1px solid",
        borderBottomColor: "blue",
      }}
    >
      <h3 style={{ color: "black" }}>{workout.title}</h3>
      <p style={{ color: "gray" }}>
        <strong>Load (Kg): </strong>
        {workout.load}
      </p>
      <p style={{ color: "gray" }}>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p style={{ color: "gray" }}>
        <strong>Created Date: </strong>
        {workout.createdAt}
      </p>
    </div>
  );
}
