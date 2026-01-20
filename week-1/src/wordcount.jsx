import { useState } from "react";
import Navbar from "./navbar.jsx";

function WordCounter() {
  const [text, setText] = useState("");

  let count = 0;
  if (text.trim() !== "") {
    count = text.trim().split(" ").length;
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Word Counter</h2>

        <div className="d-flex justify-content-center">
          <textarea
            className="form-control mb-3"
            rows="5"
            cols="30"
            style={{ width: "400px" }}
            placeholder="Type your text here..."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <p className="text-center">
          Word Count: <strong>{count}</strong>
        </p>

        {count > 20 && (
          <p className="text-danger text-center">
            Too many words!
          </p>
        )}
      </div>
    </div>
  );
}

export default WordCounter;
