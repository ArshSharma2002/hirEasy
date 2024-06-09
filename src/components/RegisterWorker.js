import React, { useContext, useState } from 'react'
import WorkersContext from '../context/workers/WorkersContext'
import Login from './Login';
import { useNavigate } from "react-router-dom";

const RegisterWorker = (props) => {



  let navigate = useNavigate();

  const workercontext = useContext(WorkersContext)
  const { addWorker } = workercontext;
  const [newWorker, setNewWorker] = useState({ name: "", age: "", gender: "", address: "", email: "", contact: "", services: "", experience: "", city: "" })
  const { name, age, gender, address, email, contact, services, experience, city } = newWorker;

  const token = localStorage.getItem('token')

  const handleAddWorker = (e) => {
    e.preventDefault()
    addWorker(name, age, gender, address, email, contact, services, experience, city)
    setNewWorker({ name: "", age: "", gender: "", address: "", email: "", contact: "", services: "", experience: "", city: "" })
    props.showAlert("Worker Registered Successfuly", "success")
    navigate("/services")

  }

  const onChange = (e) => {
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    setNewWorker({ ...newWorker, [e.target.name]: e.target.value })
  }

  return (
    <div className='container m-5'>
      {!token ? <Login /> :

        <div className="container m-3">

          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={newWorker.name} />
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="text" className="form-control" id="age" name='age' onChange={onChange} value={newWorker.age} />
            </div>
            <fieldset className="row my-3 mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={onChange} value="M" id="gender" name="gender" />
                  <label className="form-check-label" htmlFor="gender">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={onChange} value="F" name="gender" id="gender" />
                  <label className="form-check-label" htmlFor="gender">
                    Female
                  </label>
                </div>
                <div className="form-check ">
                  <input className="form-check-input" type="radio" onChange={onChange} value="O" name="gender" id="gender" />
                  <label className="form-check-label" htmlFor="gender">
                    Others
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={newWorker.email} />
            </div>

            <div className="col-md-6">
              <label htmlFor="contact" className="form-label">Contact</label>
              <input type="text" className="form-control" id="contact" name='contact' onChange={onChange} value={newWorker.contact} />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name='address' placeholder="1234 Main St" onChange={onChange} value={newWorker.address} />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" name='city' id="city" onChange={onChange} value={newWorker.city} />
            </div>
            <div className="col-md-4">
              <label htmlFor="services" className="form-label">Services</label>
              <select id="services" name='services' onChange={onChange} value={newWorker.services} className="form-select">
                <option selected>Baby sitter</option>
                <option selected>Cook</option>
                <option selected>Laundry</option>
                <option selected>Old age care</option>
                <option selected>Disable person's care</option>
                <option selected>Gardening</option>
                <option selected>Care taker</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="experience" className="form-label">Experience</label>
              <input type="text" className="form-control" id="experience" name='experience' onChange={onChange} value={newWorker.experience} />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  by registering yourself you agreeing to our privacy policies
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" onClick={handleAddWorker} className="btn btn-success">Register</button>
            </div>
          </form>
        </div>

      }
    </div>
  )
}

export default RegisterWorker