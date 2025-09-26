import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/homecontent/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
