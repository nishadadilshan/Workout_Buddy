import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workout");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
        console.log("Workouts --->>", json);
      }
    };
    setRefreshing(false);
    fetchWorkouts();
  }, [refreshing]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm setRefreshing={setRefreshing} />
    </div>
  );
}
