import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
}