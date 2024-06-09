import React , {useContext,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import WorkersContext from '../context/workers/WorkersContext'

const Profile = () => {

  const workerscontext = useContext(WorkersContext)
  const {getWorkerProfile,workers} = workerscontext

  const location = useLocation()
  const { _id } = location.state

  useEffect(() => {
    getWorkerProfile(_id)
  
  })
  
  const {gender} = workers

  let proImg = 'https://bootdey.com/img/Content/avatar/avatar6.png'

  if(gender==='M'){
      proImg = 'https://bootdey.com/img/Content/avatar/avatar7.png'
  }
  else if(gender==='F'){
      proImg = 'https://bootdey.com/img/Content/avatar/avatar8.png'
  }

  



  return (
    <div className="container py-5" >
    <section className="section about-section" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">Hello , Sir !</h3>
                            <h4 className="dark-color lead">My name is <span className='text-dark fs-2 fw-bolder' >{workers.name}</span> </h4>
                            <h5>I provide services as a {workers.services} for customers of {workers.city}. I have experience of {workers.experience} years in this field and provide excellent services. My details are given below . check them out :</h5>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Age</label>
                                        <p>{workers.age}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>{workers.address}</p>
                                    </div>
                                    <div className="media">
                                        <label>Services</label>
                                        <p>{workers.services}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{workers.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>{workers.contact}</p>
                                    </div>
                                    <div className="media">
                                        <label>Experience</label>
                                        <p>{workers.experience} Years</p>
                                    </div>
                                </div>
                            </div>
                    <p className='my-4 text-left' ><a className='btn btn-md col-md-6 btn-primary' href = {`mailto:${workers.email}?subject=For Hiring via hirEasy&body=This is to inform you that someone wants to hire you`}>Send Email</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={proImg} title="" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>    
  )
}

export default Profile