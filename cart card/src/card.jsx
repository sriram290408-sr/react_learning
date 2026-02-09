import "./card.css";
import products from "./details";
import { useState } from "react";

let [x, setx] = useState(0);

function add () {
  return x+1;
}
function Card() {
  return (
    <div class="main">
      {products.map((item) => (
        <div key={item.id} className="container">
          <img src={item.img} alt="product" className="image" />

          <h3 className="head">Snickers off-white</h3>
          <button className="but" onClick={add}>
            +
          </button>

          <div id="merge">
            <p className="para">2024</p>
            <span>Nike</span> 

            <h4 className="dollar">$38.00</h4>
            <h3>Items: {x}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
