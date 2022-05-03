import React , {useContext , useState} from 'react'
import WorkersContext from '../context/workers/WorkersContext'

const RegisterWorker = () => {


  const workercontext = useContext(WorkersContext)
  const {addWorker} = workercontext;
  const [newWorker, setNewWorker] = useState({name:"",email:"",contact:"",services:""})
  const {name,email,contact,services} = newWorker;

  const handleAddWorker = (e)=>{
      e.preventDefault()
      addWorker(name,email,contact,services)
      setNewWorker({name:"",email:"",contact:"",services:""})
  }

  const onChange=(e)=>{
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    setNewWorker({...newWorker, [e.target.name]:e.target.value})
}

  return (
    <div className='container my-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={onChange} value={newWorker.name} id="name"  name="name" aria-describedby="emailHelp"/>
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
    </div>
  )
}

export default RegisterWorker