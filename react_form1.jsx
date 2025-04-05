import React, { useState } from "react";
import "./App1.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const [submittedName, setSubmittedName] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    setSubmittedName(fullName);
    setFullName({ fname: "", lname: "" }); // Clear input fields
  }

  return (
    <div className="container">
      <h1>
        Hello{" "}
        {submittedName
          ? `${submittedName.fname} ${submittedName.lname}`
          : "Guest"}{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={fullName.fname}
          placeholder="Enter your first name"
        />
        <br />
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          value={fullName.lname}
          placeholder="Enter your last name"
        />
        <br />
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
    </div>
  );
}

export default App;
