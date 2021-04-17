import React, { useState } from "react";
import "../Styles/form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name is " + name);
    console.log("feedback is " + feedback);
  };

  return (
    <div>
      <h1> Feedback Form </h1>
      <p> We want to gather your feedbacks about this workshop </p>
      <form>
        <div className="question">
          <label htmlFor="name"> Leave your name here: </label>{" "}
          <input
            id="input1"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="question">
          <label htmlFor="feedback">
            {" "}
            Give us your feedback about this session{" "}
          </label>
          <textarea
            id="input2"
            type="text"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <input
          id="input3"
          type="submit"
          value="Submit now"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
