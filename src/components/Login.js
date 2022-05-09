import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {


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
        const response = await fetch(`http://localhost/api/auth/login`, {
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
            // props.showAlert("Logged in Successfuly" , "success")
          }
          // else{
          //   props.showAlert("Invalid details" , "danger")
          // }
    }

  return (
    <div class="modal modal-signin position-static d-block bg-secondary" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog py-4 " role="document">
    <div class="modal-content curve shadow py-4">
      <div class="modal-header p-5 pb-5 border-bottom-0">
        <h2 class="fw-bold mb-0">Login Now</h2>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled></button> */}
      </div>

      <div class="modal-body p-5 pt-0"> 
        <form class="" onSubmit={handleOnLogin}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-4" value={credentials.email} onChange={onChange}id="email" name="email" placeholder="name@example.com"/>
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-4" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
            <label for="password">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-4 btn-dark" type="submit">Log in</button>
          <small class="text-muted">By clicking Log in, you agree to the terms of use.</small>
        </form>
        <hr />
        <button class="w-100 py-2 mb-2 btn btn-outline-primary text-center rounded-4" type="submit">
            <Link to="/signup" >Sign up</Link> 
          </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
