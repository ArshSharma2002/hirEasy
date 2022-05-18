import React , {useEffect} from 'react'
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

  return (
      <header>
      <nav className="navDesign navbar navbar-expand-md fixed-top text-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">hirEasy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registerworker">Register as worker</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex">
              <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
            </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar