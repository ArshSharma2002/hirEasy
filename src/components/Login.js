import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [credentials, setCedentials] = useState({email:"",password:""})

    let navigate = useNavigate()

    const onChange = (e) => {
        // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
        // this is for getting the value of the input tag entered by user inorder to send it to the body through a state.
        setCedentials({ ...credentials, [e.target.name]: e.target.value });
        
      };

    const handleOnLogin = async (e)=>{
        e.preventDefault();
        // fetch("http://localhost/api/auth/login")
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json' 
            },
            // {title,description,tag} is an object title:title , desc:desc ...... so on .
            body: JSON.stringify({email:credentials.email,password:credentials.password}) 
          });
  
          const json = await response.json();
          console.log(json)
          if(json.success){
            // save the authtoken & redirect to home page using useNavigate hook.
            localStorage.setItem('token',json.authToken)
            navigate("/");
            props.showAlert("Logged in Successfuly" , "success")
          }
          else{
            props.showAlert("Invalid details" , "danger")
          }
    }

    const loadSignin=()=>{
      navigate("/signup")
    }

  return (
    <div className="modal modal-signin position-static d-block bg-secondary" tabIndex="-1" role="dialog" id="modalSignin">
  <div className="modal-dialog " role="document">
    <div className="modal-content curve shadow py-4">
      <div className="modal-header px-5 pb-5 border-bottom-0">
        <h2 className="fw-bold mb-0">Login Now</h2>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled></button> */}
      </div>

      <div className="modal-body p-5 pt-0"> 
        <form className="" onSubmit={handleOnLogin}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" value={credentials.email} onChange={onChange}id="email" name="email" placeholder="name@example.com"/>
            <label htmlFor="email"><i className="fa fa-user"></i> Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
            <label htmlFor="password"><i className="fa fa-lock"></i> Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Log in</button>
          <small className="text-muted">By clicking Log in, you agree to the terms of use.</small>
        </form>
        <hr />
        <p className="text-center" >OR</p>
        <button onClick={loadSignin} className="w-100 py-2 mb-2 btn btn-lg btn-primary text-center rounded-4" type="submit">
            Sign up
          </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
