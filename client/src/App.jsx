import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/SingUp";
import Project from "./pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/projects" element={<Project />}/>
    </Routes>
    </BrowserRouter>
  );
}
