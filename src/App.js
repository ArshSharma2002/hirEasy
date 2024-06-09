import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RegisterWorker from './components/RegisterWorker';
import WorkersState from './context/workers/WorkersState'
import Alert from "./components/Alert";
import React , {useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Profile from './components/Profile';
import About from './components/About';

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
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/signup'  element={<Signup showAlert={showAlert} />} />
          <Route exact path='/login' element={<Login showAlert={showAlert} />} />
          <Route exact path='/contactus' element={<Contactus/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/registerworker' element={<RegisterWorker showAlert={showAlert} />} /> 
          <Route exact path='/workerprofile/:_id' element={<Profile/>} /> 
          <Route exact path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </Router>
    </WorkersState>
  );
}

export default App;
