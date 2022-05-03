import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RegisterWorker from './components/RegisterWorker';
import WorkersState from './context/workers/WorkersState'
// import Alert from "./components/Alert";
// import AuthState from './context/auth/AuthState'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({ msg: message, type: type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // };

  
  return (
    // <AuthState>

    <WorkersState>

    <Router>

    <div>
    <Navbar/>
    {/* <Alert alert={alert}/> */}
    <Routes>
          <Route path='/services' element={<Services/>} />
          <Route path='/signup'  element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registerworker' element={<RegisterWorker/>} />
          <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
    </WorkersState>
    // </AuthState>
  );
}

export default App;
