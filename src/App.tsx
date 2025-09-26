import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/login";
import Home from "./components/pages/homecontent/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
