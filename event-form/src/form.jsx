import "./form.css";
import { useState } from "react";

function Form() {;
//   const full = () => {
//     [{ id: 1, value: username }];
//   };
  return (
    <div className="container">
      <h1>Welcome to Hackathon Event in ABC College</h1>
      <h4>Register the form and book your place</h4>
      <form className="myform">
        <label>Name</label> <br />
        <input
          type="text"
          name="surename"
          placeholder="Enter your Name"
          className="inform"
          id="surename"
        />
        <br />
        <label>Email ID</label> <br />
        <input
          type="email"
          name="mail"
          placeholder="Enter your e-mail"
          className="inform"
        />
        <br />
        <label>Phone</label> <br />
        <input
          type="text"
          name="call"
          placeholder="Enter your phone number"
          className="inform"
        />
        <br />
        <label>City</label> <br />
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          className="inform"
        />{" "}
        <br />
        <label>Food(optional)</label> <br />
        <select name="food" className="drop">
          <option className="foody">BreakFast</option>
          <option className="foody">Lunch</option>
        </select>
        <button type="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
