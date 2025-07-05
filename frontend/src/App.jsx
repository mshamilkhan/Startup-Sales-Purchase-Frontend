import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import { LandingPage } from './pages/LandingPage/LandingPage';
import {Marketplace} from './pages/Marketplace/Marketplace';
import { Collaboration } from './pages/Collaboration/Collaboration';
import StartupDetails from './pages/StartupDetails/StartupDetails';
import CreateStartupProject from './pages/CreateStartup/CreateStartupProject';
// import other pages...

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/marketplace" element={<Marketplace/>} />
      <Route path="/collaboration" element={<Collaboration/>} />
      <Route path="/startupdetail" element={<StartupDetails/>} />
      <Route path="/createstartup" element={<CreateStartupProject/>} />
    
    </Routes>
  );
}

export default App;
