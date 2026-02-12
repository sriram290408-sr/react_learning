import "./city.css";
import cities from "./list";
import { useState } from "react";

function Status() {
    const [status, setstatus] = useState("Ex:Chennai");

    return(
        <div className="container" key={item.id}>
            <h1>City Selector</h1>
            <h3>Select City: {(status)} </h3>
            <li>{item.city}</li>
            <button>Select</button>
        </div>
    );
}

export default Status;