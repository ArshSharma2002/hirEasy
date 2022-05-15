import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RegisterWorker from './components/RegisterWorker';
import WorkersState from './context/workers/WorkersState'
import Alert from "./components/Alert";
import React , {useState , useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Profile from './components/Profile';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  

  return (

    <WorkersState>

    <Router>

    <Navbar showAlert={showAlert} />
    <Alert alert={alert}/>
    <Routes>
          <Route path='/services' element={<Services/>} />
          <Route path='/signup'  element={<Signup showAlert={showAlert} />} />
          <Route path='/login' element={<Login showAlert={showAlert} />} />
          <Route path='/contactus' element={<Contactus/>} />
          <Route path='/registerworker' element={<RegisterWorker showAlert={showAlert} />} /> 
          <Route path='/workerprofile/:_id' element={<Profile/>} /> 
          <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </Router>
    </WorkersState>
  );
}

export default App;
