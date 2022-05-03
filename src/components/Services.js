import React, { useContext, useEffect } from 'react'
import ServiceItem from './ServiceItem'
import WorkersContext from '../context/workers/WorkersContext'

const Services = () => {

  const workercontext = useContext(WorkersContext)
  const {workers,getWorkers} = workercontext;
  
  useEffect(() => {
    getWorkers();
  }, [])
  

  return (
    <div className='d-flex align-items-center justify-content-center'>
        <div className='row container my-4 mx-2 d-flex justify-content-center'>
          
          {workers.map((worker)=>{
            return <ServiceItem key={worker._id} worker={worker} />;
          })}

        </div>
    </div>
  )
}

export default Services