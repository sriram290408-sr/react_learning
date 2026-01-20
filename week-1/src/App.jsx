import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Products from "./product.jsx";
import Calculator from "./calculator.jsx";
import WordCounter from "./wordcount.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/word" element={<WordCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
