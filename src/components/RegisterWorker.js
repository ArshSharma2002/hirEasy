import React , {useContext , useState} from 'react'
import WorkersContext from '../context/workers/WorkersContext'
import Login from './Login';

const RegisterWorker = () => {


  const workercontext = useContext(WorkersContext)
  const {addWorker} = workercontext;
  const [newWorker, setNewWorker] = useState({name:"",age:"",gender:"",address:"",email:"",contact:"",services:"",experience:""})
  const {name,age,gender,address,email,contact,services,experience} = newWorker;

  const token = localStorage.getItem('token')

  const handleAddWorker = (e)=>{
      e.preventDefault()
      addWorker(name,age,gender,address,email,contact,services,experience)
      setNewWorker({name:"",age:"",gender:"",address:"",email:"",contact:"",services:"",experience:""})
  }

  const onChange=(e)=>{
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    setNewWorker({...newWorker, [e.target.name]:e.target.value})
}

  return (
      <>
    {!token ? <Login/> : 
    <div className='container my-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.name} id="name"  name="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.age} id="age"  name="age" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.gender} id="gender"  name="gender" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.address} id="address"  name="address" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} value={newWorker.email} id="email"  name="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input type="tel" className="form-control" onChange={onChange} value={newWorker.contact} id="contact" name="contact" />
            </div>
            <div className="mb-3">
                <label htmlFor="services" className="form-label">Services</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.services} id="services" name="services" />
            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.experience} id="experience" name="experience" />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="services" className="form-label">Services</label>
                <select onChange={onServiceChange} id="services" className="form-select" name="services" >
                    <option value={newWorker.services} >Baby sitter</option>
                    <option value={newWorker.services} >Cook</option>
                    <option value={newWorker.services} >Laundry & Dishwasher </option>
                    <option value={newWorker.services} >Complete service</option>
                </select>
            </div> */}
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={handleAddWorker} className="btn btn-primary">Submit</button>
        </form>
    </div>}
    </>
  )
}

export default RegisterWorker