import React from 'react'
import wrImg from './images/cook-1.jpg'

const ServiceItem = (props) => {
  const {worker} = props;
  return (
        <div className="card mx-4 my-4" style={{width: "25%"}}>
            {/* <h5 class="card-header">Featured</h5> */}
            <img src={wrImg} className=" my-2 card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name : {worker.name}</h5>
                <h5 className="card-text">Contact : {worker.contact}</h5>
                <h5 className="card-text">Service : {worker.services}</h5>
                <a href="#" className="btn btn-danger my-2"> Hire now </a>
            </div>
        </div>
  )
}

export default ServiceItem