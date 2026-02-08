import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
