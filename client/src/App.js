import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
