import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
