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
            // props.showAlert("Account Created Successfully" , "success")
          }
          // else{
          //   props.showAlert("Invalid details" , "danger")
          // }
          
    }

  return (
    // <div className="container">
    //   <form onSubmit={handleOnSignin}>
    //     <div className="mb-3">
    //       <label htmlFor="name" className="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="name"
    //         aria-describedby="emailHelp"
    //         name="name"
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="email"
    //         aria-describedby="emailHelp"
    //         name="email"
    //         onChange={onChange}
    //       />
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="password"
    //         name="password"
    //         onChange={onChange}
    //         minLength={5}
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="cpassword" className="form-label">
    //         Confirm Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="cpassword"
    //         name="cpassword"
    //         onChange={onChange}
    //         minLength={5}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>

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
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" value={credentials.email} onChange={onChange}id="email" name="email" placeholder="name@example.com" minLength={5} required/>
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" minLength={5} required/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" value={credentials.cpassword} onChange={onChange} id="cpassword" name="cpassword" placeholder="Confirm Password" minLength={5} required/>
            <label htmlFor="cpassword">Confirm Password</label>
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
