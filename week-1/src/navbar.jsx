import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px", textDecoration: "None"}}>Home</Link>
      <Link to="/products" style={{ color: "white", marginRight: "15px", textDecoration: "None" }}>Products</Link>
      <Link to="/calculator" style={{ color: "white", marginRight: "15px", textDecoration: "None" }}>Calculator</Link>
      <Link to="/word" style={{ color: "white", textDecoration: "None" }}>Word Counter</Link>
    </div>
  );
}

export default Navbar;
