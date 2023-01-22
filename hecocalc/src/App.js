import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    // <Router>
    //    <Routes>
    //       <Route path='/' element={<Home />} />
    //   </Routes>
    // </Router>

    <>
      <Navbar />
    </>
  );
}

export default App;
