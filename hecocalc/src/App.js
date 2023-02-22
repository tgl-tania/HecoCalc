import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Uploads from "./pages/Uploads";
import GenerateTree from "./pages/GenerateTree";
import InputPage from "./components/InputPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/generatetree" element={<GenerateTree />} />
        <Route path="/input-page" element={<InputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
