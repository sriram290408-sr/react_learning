import React, { useState } from "react";
import "./component.css";

function Component() {
  const [count, setcount] = useState();

  const TempInc = () => {
    setcount(count + 1);
  };

  const TempDec = () => {
    setcount(count - 1);
  };

  const Inputnum = (event) => {
    setcount(Number(event.target.value));
  };

  return (
    <div className="container">
      <h1>Select Your Range of Temperature</h1>

      <input
        type="number"
        placeholder="Enter Temperature"
        name="num"
        onChange={Inputnum}
        value={count}
      />

      <div className="current-t">
        <h1>Current Temperature: {count}°C</h1>

        <button className="but" onClick={TempInc}>
          Inc
        </button>

        <button className="but" onClick={TempDec}>
          Dec
        </button>
      </div>
    </div>
  );
}

export default Component;
