import React , {useEffect , useState} from 'react'
import { useNavigate } from "react-router-dom";
import {
  Link,
  useLocation

} from "react-router-dom";


function Navbar(props) {

  let location = useLocation();
    useEffect(() => {
      // console.log(location.pathname)
    }, [location]);

    const navigate = useNavigate();

    const handleLogout = ()=>{
      localStorage.removeItem('token');
      navigate("/login");
      props.showAlert("Logged Out Successfuly" , "success")
    }

    
    const [modeLabel, setModeLabel] = useState("☀️")

    const toggleMode = () => {
      if (modeLabel === "☀️") {
        setModeLabel("🌙");
        document.getElementById('body').style.backgroundImage="linear-gradient(to right, #dbf3fd , #79bad6)"
        document.getElementById('nav').style.background="#b9e6fa";
        document.getElementById('footer').style.background="#b9e6fa";
        document.getElementById('footer').style.color="rgb(21, 40, 105)";
        var elements = document.getElementsByClassName('navLinks');
        for(var i = 0, length = elements.length; i < length; i++) {
              elements[i].style.color="rgb(21, 40, 105)";
           
        }
        
        
      } else {
        
        setModeLabel("☀️");
        document.getElementById('body').style.backgroundImage="linear-gradient(to right, rgb(16, 70, 131) , rgb(94, 208, 243))"
        document.getElementById('nav').style.background="rgb(21, 40, 105)";
        document.getElementById('footer').style.background="rgb(21, 40, 105)";
        document.getElementById('footer').style.color="white";
        var elements = document.getElementsByClassName('navLinks');
        for(var i = 0, length = elements.length; i < length; i++) {
              elements[i].style.color="white";
           
        }
        
      }
  
    };

  return (
      <header>
      <nav id='nav' className="navDesign navbar navbar-expand-md fixed-top text-dark">
        <div className="container-fluid">
          <a className="navLinks navbar-brand" href="/">hirEasy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="navLinks nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks nav-link" to="/contactus">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks nav-link" to="/registerworker">Register as worker</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                {/* <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i> */}
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeLabel}</label>
                </div>
            {!localStorage.getItem('token') ? <form className="d-flex">
              <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
            </form> : <button onClick={handleLogout} className="btn btn-primary mx-3">Logout</button>}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar