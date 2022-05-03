// // here we create all the states wich can be direcrly accesssible by components .
// import React , {useState} from "react";
// import AuthContext from "./AuthContext";

// const AuthState = (props) => {

//     const createuser = async (name,email,password)=>{
//         const response = await fetch(`http://localhost/api/auth/createuser`, {
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             headers: {
//               'Content-Type': 'application/json' 
//             },
//             // {title,description,tag} is an object title:title , desc:desc ...... so on .
//             body: JSON.stringify({name,email,password}) 
//           });
  
//           const json = await response.json();
//           console.log(json)
//           if(json.success){
//             // save the authtoken & redirect to home page using useHistory hook.
//             localStorage.setItem('token',json.authToken)
//             history.push("/login")
//             props.showAlert("Account Created Successfully" , "success")
//           }
//           else{
//             props.showAlert("Invalid details" , "danger")
//           }
          
//     }


//     const loginuser = async (email,password)=>{
//         const response = await fetch(`http://localhost/api/auth/login`, {
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             headers: {
//               'Content-Type': 'application/json' 
//             },
//             // {title,description,tag} is an object title:title , desc:desc ...... so on .
//             body: JSON.stringify({email:email,password:password}) 
//           });
  
//           const json = await response.json();
//           console.log(json)
//           if(json.success){
//             // save the authtoken & redirect to home page using useHistory hook.
//             localStorage.setItem('token',json.authToken)
//             history.push("/")
//             props.showAlert("Logged in Successfuly" , "success")
//           }
//           else{
//             props.showAlert("Invalid details" , "danger")
//           }
//     }



//   return (
//     // if we wrap up the components inside <workerstate> tags than all those components can access these states . value = {{state:state , update:update}}
//         <AuthContext.Provider value = {{createuser,loginuser,getUser}}>
//             {props.children}
//         </AuthContext.Provider>
//   )
// }

// export default AuthState