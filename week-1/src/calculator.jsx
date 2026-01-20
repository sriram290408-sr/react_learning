import { useState } from "react";
import Navbar from "./navbar.jsx";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function addNumbers() {
    setResult(Number(num1) + Number(num2));
  }

  function subtractNumbers() {
    setResult(Number(num1) - Number(num2));
  }

  function multiplyNumbers() {
    setResult(Number(num1) * Number(num2));
  }

  function divideNumbers() {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2>Calculator</h2>

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={addNumbers}>+</button>
          <button className="btn btn-primary me-2" onClick={subtractNumbers}>-</button>
          <button className="btn btn-primary me-2" onClick={multiplyNumbers}>×</button>
          <button className="btn btn-primary" onClick={divideNumbers}>÷</button>
        </div>

        <h4>Result: {result}</h4>
      </div>
    </div>
  );
}

export default Calculator;
