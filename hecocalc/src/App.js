import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import GraphsDashboard from './pages/GraphsDashboard'

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<GraphsDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
