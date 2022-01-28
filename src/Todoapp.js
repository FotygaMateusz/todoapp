import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./Todoapp.css";

const Todoapp = (props) => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const changeTaskStatus = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) =>
      task.id === id
        ? ((task.active = false), (task.finishDate = new Date().getTime()))
        : null
    );
    setTasks(newTasks);
  };

  const addTask = (text, date, important) => {
    const task = {
      id: tasks.length,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    const update = [...tasks, task];
    setTasks(update);
    return true;
  };

  return (
    <div className="todomain">
      <h1>TO DO APP</h1>
      <AddTask add={addTask} />
      <TaskList {...{ tasks }} delete={deleteTask} change={changeTaskStatus} />
    </div>
  );
};

export default Todoapp;
