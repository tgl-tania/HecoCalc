import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Results from './pages/Results';

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/results' element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default App;
