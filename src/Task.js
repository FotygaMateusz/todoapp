import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };
  const { text, date, id, active, finishDate, important } = props.task;
  const finished = new Date(finishDate).toLocaleDateString();
  return (
    <div>
      <p>
        <strong style={important ? style : null}>{text}</strong>{" "}
        <span>{active ? " do " + date : "wykonano: " + finished} </span>
        {active ? (
          <button className="done-btn" onClick={() => props.change(id)}>
            Zrobione
          </button>
        ) : null}
        <button className="done-btn" onClick={() => props.delete(id)}>
          X
        </button>
      </p>
    </div>
  );
};

export default Task;
