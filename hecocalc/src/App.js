import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Uploads from "./pages/Uploads";
import GenerateTree from "./pages/GenerateTree";
import InputPage from "./components/InputPage";
import Simulation from "./pages/Simulation";
import LoginSettings from "./pages/SettingsPage";
import { useState } from "react";

function App() {
  const [iterationNum, setIterationNum] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              iterationNum={iterationNum}
              setIterationNum={setIterationNum}
            />
          }
        />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/generatetree" element={<GenerateTree />} />
        <Route path="/input-page" element={<InputPage />} />
        <Route
          path="/simulation"
          element={<Simulation iterationNum={iterationNum} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
