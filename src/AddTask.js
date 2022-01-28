import React, { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [alert, setAlert] = useState(false);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };
  const handleClick = () => {
    if (text.length > 2) {
      const add = props.add(text, date, checked);
      if (add) {
        setText("");
        setChecked(false);
        setDate(new Date().toISOString().slice(0, 10));
        setAlert(false);
      }
    } else {
      setAlert(true);
    }
  };
  return (
    <div className="todotask">
      <input
        className="inputcc"
        type="text"
        placeholder="Dodaj zadanie..."
        value={text}
        onChange={handleText}
      />
      <br />
      <input
        type="checkbox"
        checked={checked}
        id="important"
        onChange={handleCheckbox}
      />
      <label htmlFor="important">Priorytet</label>
      {alert ? (
        <p
          style={{
            color: "red",
            margin: 0,
          }}
        >
          Minimum 3 znaki
        </p>
      ) : null}
      <br />
      <input
        className="inputcc"
        type="date"
        value={date}
        onChange={handleDate}
        min={date}
      />
      <br />
      <button className="add-btn" onClick={handleClick}>
        Dodaj
      </button>

      <hr />
    </div>
  );
};

export default AddTask;
