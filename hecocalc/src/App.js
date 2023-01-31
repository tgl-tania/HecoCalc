import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Results';

import GraphsDashboard from './pages/GraphsDashboard'

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/results' element={<Results />}/>
          <Route path='/dashboard' element={<GraphsDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
