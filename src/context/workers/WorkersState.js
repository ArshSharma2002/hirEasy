// here we create all the states wich can be direcrly accesssible by components .
import React , {useState} from "react";
import WorkersContext from "./WorkersContext";

const WorkersState = (props)=>{

    const host = "http://localhost:8000"

    const initialWorkers = [];
    
    const [workers, setWorkers] = useState(initialWorkers)
    

      // fetching all workers
      const getWorkers = async ()=>{

        // API call for fetching note .
        const response = await fetch(`${host}/api/workers/`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'auth-token' : localStorage.getItem('token')
            
            
          }
        });

        const json = await response.json();
        console.log(json)

        setWorkers(json)

      }

      // fetching particular workers
      const getWorkerProfile = async (_id)=>{

        // API call for fetching note .
        const url = host +"/api/workers/workerprofile/"+_id;
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'auth-token' : localStorage.getItem('token')
            
            
          }
        });

        const json = await response.json();
        console.log(json)

        setWorkers(json)

      }

      // Adding a worker
      const addWorker = async (name,age,gender,address,email,contact,services,experience,city)=>{
        console.log("worker is added...")

        // API call for adding note .
        const url = host+"/api/workers/";
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'auth-token' : localStorage.getItem('token')
            
          },
          // {title,description,tag} is an object title:title , desc:desc ...... so on .
          body: JSON.stringify({name,age,gender,address,email,contact,services,experience,city}) 
        });
        const newWorker = await response.json();
        console.log(newWorker);
        setWorkers(workers.concat(newWorker));
      }

    return(
        // if we wrap up the components inside <workerstate> tags than all those components can access these states . value = {{state:state , update:update}}
        <WorkersContext.Provider value = {{workers,addWorker,getWorkers,getWorkerProfile}}>
            {props.children}
        </WorkersContext.Provider>
    )

}

export default WorkersState;

