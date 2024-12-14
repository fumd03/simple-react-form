import React, { useState } from "react";
import "./App1.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const [submittedName, setSubmittedName] = useState(null);

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fname") {
        return {
          fname: newValue,
          lname: prevValue.lname,
        };
      } else if (inputName === "lname") {
        return {
          fname: prevValue.fname,
          lname: newValue,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    setSubmittedName(fullName);
  }

  return (
    <div className="container">
      <h1>
        Hello{" "}
        {submittedName
          ? `${submittedName.fname} ${submittedName.lname}`
          : "Guest"}{" "}
      </h1>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          placeholder="Enter your first name"
        />
        <br />
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          placeholder="Enter your last name"
        />
        <br />
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
    </div>
  );
}

export default App;
