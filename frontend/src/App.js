import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/first-sign';
import Dashboard from './components/dashboard/Dashboard';
import Verify from './components/verification/verify';
import Profile from "./components/Profile/profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
 <Routes>
  <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login/>} />
     <Route path="/signUp" element={<SignUp /> } />
     <Route path="/dashboard" element={<Dashboard /> } />
     <Route path="/verification" element={<Verify /> } />
     <Route path="/profile" element={<Profile /> } />
 </Routes>
    </Router>
   
  );
}

export default App;
