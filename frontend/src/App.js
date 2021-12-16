import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/first-sign';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
 <Routes>
  <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login/>} />
     <Route path="/SignUp" element={<SignUp /> } />
     <Route path="/dashboard" element={<Dashboard /> } />
 </Routes>
    </Router>
   
  );
}

export default App;
