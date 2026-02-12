import React from "react";
import "./dial.css";

function Dial() {
  const toggleButton = () => {
    var box = document.getElementById("toggleMe");

    if (box.style.zIndex === "10") {
      box.style.zIndex = "-1";
      box.style.opacity = "0";
    } else {
      box.style.zIndex = "10";
      box.style.opacity = "1";  
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={toggleButton}>
        Open dialog box
      </button>

      <div id="toggleMe">
        <h2>Congrats!!</h2>
        <h5>You Have Opened a Dial log</h5>
        <button className="button" onClick={toggleButton}>Close dialog box</button>
      </div>
    </div>
  );
}

export default Dial;
