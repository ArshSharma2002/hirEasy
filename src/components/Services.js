import React, { useContext, useEffect } from 'react'
import ServiceItem from './ServiceItem'
import WorkersContext from '../context/workers/WorkersContext'
import Login from './Login'

const Services = () => {

  const workercontext = useContext(WorkersContext)
  const {workers,getWorkers} = workercontext;
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    getWorkers();
  })
  

  return (
    <>
    {!token ? <Login/> : 
    <div className='d-flex align-items-center justify-content-center min-vh-100'>
      <div className='row container my-4 mx-2 d-flex justify-content-center'>
        
        {workers.map((worker)=>{
          return <ServiceItem key={worker._id} worker={worker} />;
        })}

      </div>
    </div>}
      </>
  )
}

export default Services