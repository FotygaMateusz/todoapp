import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const activeTasks =
    active.length &&
    active.map((task) => (
      <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
      />
    ));
  const doneTasks =
    done.length &&
    done.map((task) => (
      <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
      />
    ));
  return (
    <>
      <div className="activetask">
        <h1>Zadania do zrobienia</h1>
        <br />
        {activeTasks.length && activeTasks}
      </div>
      <hr />
      <div className="donetask">
        <h3>Zadania Zrobione </h3>
        <br />
        {doneTasks.length && doneTasks}
      </div>
    </>
  );
};

export default TaskList;
