import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Uploads from "./pages/Uploads";
import GenerateTree from "./pages/GenerateTree";
import InputPage from "./components/InputPage";
import Simulation from "./pages/Simulation";
import LoginSettings from "./pages/SettingsPage";
import { useState } from "react";
import App from "./App";


function AppRouter(){
  const [iterationNum, setIterationNum] = useState(0);
    return(
        <Router>
        <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Login />}/>
        <Route path="/loginsettings" element={<LoginSettings />} />
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
        </Route>
      </Routes>
    </Router>
    )
}

export default AppRouter;