import React from "react";

export default function WorkoutDetails({ workout }) {
  return (
    <div
      className="workout-details"
      style={{
        borderRadius: "8px",
        borderBottom: "1px solid",
        borderBottomColor: "gray",
      }}
    >
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
}
