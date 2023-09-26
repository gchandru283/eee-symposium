import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home/>} path="/" /> 
          <Route element={<Events/>} path="/events" /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
