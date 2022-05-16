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
  
  }, [])
  



  return (
    <div className="container py-5" >
    <section className="section about-section" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">Hello , Sir !</h3>
                            <h4 className="dark-color lead">My name is <span className='text-dark fs-2 fw-bolder' >{workers.name}</span> </h4>
                            <h5>I provide services as a <mark>{workers.services}</mark> for customers of Punjab. I have experience of {workers.experience} years in this field and provide excellent services. My details are given below . check them out :</h5>
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
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="..." />
                        </div>
                    </div>
                </div>
                {/* <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    </div>    
  )
}

export default Profile