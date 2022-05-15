import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    
    const [credentials, setCedentials] = useState({name:"",email:"",password:"",cpassword:""})
    const onChange = (e) => {
        // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
        // this is for getting the value of the input tag entered by user inorder to send it to the body through a state.
        setCedentials({ ...credentials, [e.target.name]: e.target.value });
        
      };

      let navigate = useNavigate();

    const handleOnSignin = async (e)=>{
        
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch(`http://localhost/api/auth/createuser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json' 
            },
            // {title,description,tag} is an object title:title , desc:desc ...... so on .
            body: JSON.stringify({name,email,password}) 
          });
  
          const json = await response.json();
          console.log(json)
          if(json.success){
            // save the authtoken & redirect to login page using useNavigate hook.
            localStorage.setItem('token',json.authToken)
            navigate("/login");
            props.showAlert("Account Created Successfully" , "success")
          }
          else{
            props.showAlert("Invalid details" , "danger")
          }
          
    }

  return (
    // <div className="container">
          <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div className="modal-dialog" role="document">
    <div className="modal-content curve shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}
        <h2 className="fw-bold mb-0">Sign up for free</h2>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled></button> */}
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="" onSubmit={handleOnSignin}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-4" value={credentials.name} onChange={onChange}id="name" name="name" placeholder="name"/>
            <label htmlFor="name"><i class="fa fa-user"></i> Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" value={credentials.email} onChange={onChange}id="email" name="email" placeholder="name@example.com" minLength={5} required/>
            <label htmlFor="email"><i class="fa fa-envelope"></i> Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" minLength={5} required/>
            <label htmlFor="password"><i class="fa fa-lock"></i> Password</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" value={credentials.cpassword} onChange={onChange} id="cpassword" name="cpassword" placeholder="Confirm Password" minLength={5} required/>
            <label htmlFor="cpassword"><i class="fa fa-lock"></i> Confirm Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
</div>
    // </div>

  );
}

export default Signup;
