import React , {useContext} from 'react'
import wrImg from './images/cook-1.jpg'
import WorkersContext from '../context/workers/WorkersContext';
// import {
//   Link
// } from "react-router-dom";

const ServiceItem = (props) => {
  const {worker} = props;
  const {experience} = worker;
  var exp = experience;
  let rating = 1
  if (exp<15) {
    rating = 4.5
  }
  else if(exp<15 && exp>10){
    rating = 4
  }
  else if(exp<10 && exp>5){
    rating = 3
  }
  else{
    rating = 2
  }

  const workerscontext = useContext(WorkersContext)
  const {getWorkerProfile} = workerscontext



  const getWorker = (e)=>{
    e.preventDefault()
    getWorkerProfile(worker._id)
  }

  return (


        <div className="card mx-4 my-4" style={{width: "25%"}}>
            <img src={wrImg} className=" my-2 card-img-top" alt="..."/>
            <div className="card-body">
              <span className='ratingsManage'>

                <h5 className="card-title">Name : {worker.name}</h5><span className="ratings badge rounded-pill bg-dark">{rating}⭐</span>
              </span>
                <h5 className="card-text">Contact : {worker.contact}</h5>
                <h5 className="card-text">Service : {worker.services}</h5>
            <button type="submit" className="btn btn-danger my-2" onClick={getWorker} >View Profile</button>

        {/* {isPreviewShown && <Profile worker={worker} />} */}
            </div>
        </div>
  )
}

export default ServiceItem