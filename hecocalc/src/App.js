import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Results from './pages/Results';
import Uploads from './pages/Uploads';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/results' element={<Results />}/>
          <Route path='/uploads' element={<Uploads />} />
      </Routes>
    </Router>
  );
}

export default App;
