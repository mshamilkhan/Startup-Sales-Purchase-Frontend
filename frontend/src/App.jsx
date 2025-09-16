import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import { LandingPage } from './pages/LandingPage/LandingPage';
import {Marketplace} from './pages/Marketplace/Marketplace';
import { Collaboration } from './pages/Collaboration/Collaboration';
import StartupDetails from './pages/StartupDetails/StartupDetails';
import CreateStartupProject from './pages/CreateStartup/CreateStartupProject';
import ApplyJob from './pages/ApplyJob/ApplyJob';
import ComingSoon from './components/comingsoon/Comingsoon';
import AccountSettings from './pages/AccountSettings/AccountSettings';
import AccountSettingsII from './pages/AccountSettings/AccountSettingsII';
import Message from './pages/message/Message';
import MessageDark from './pages/message/MessageDark';
// import other pages...

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} s/>
      <Route path="/marketplace" element={<ComingSoon/>} />
      <Route path="/collaboration" element={<Collaboration/>} />
      <Route path="/startupdetail" element={<StartupDetails/>} />
      <Route path="/createstartup" element={<CreateStartupProject/>} />
      <Route path="/account" element={<AccountSettingsII/>} />
      <Route path="/apply-for-collaboration" element={<ApplyJob/>} />
      <Route path="/message" element={<MessageDark/>} />
      {/* <Route path="/account" element={<AccountSettings/>} /> */}
    
    </Routes>
  );
}

export default App;
