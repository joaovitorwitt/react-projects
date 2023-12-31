import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete tasks
  function deleteTask() {}

  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <Tasks tasks={tasks} />
    </div>
  );
}
