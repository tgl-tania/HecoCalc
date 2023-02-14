import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Uploads from './pages/Uploads';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/uploads' element={<Uploads />} />
      </Routes>
    </Router>
  );
}

export default App;
