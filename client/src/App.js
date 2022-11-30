import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/ContactMe" element={<ContactMe/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/AboutMe" element={<AboutMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
