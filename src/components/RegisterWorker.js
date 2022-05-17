import React , {useContext , useState} from 'react'
import WorkersContext from '../context/workers/WorkersContext'
import Login from './Login';

const RegisterWorker = (props) => {


  const workercontext = useContext(WorkersContext)
  const {addWorker} = workercontext;
  const [newWorker, setNewWorker] = useState({name:"",age:"",gender:"",address:"",email:"",contact:"",services:"",experience:"",city:""})
  const {name,age,gender,address,email,contact,services,experience,city} = newWorker;

  const token = localStorage.getItem('token')

  const handleAddWorker = (e)=>{
      e.preventDefault()
      addWorker(name,age,gender,address,email,contact,services,experience,city)
      setNewWorker({name:"",age:"",gender:"",address:"",email:"",contact:"",services:"",experience:"",city:""})
      props.showAlert("Worker Registered Successfuly","success")
  }

  const onChange=(e)=>{
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    setNewWorker({...newWorker, [e.target.name]:e.target.value})
}

  return (
      <>
    {!token ? <Login/> :
       
       <div className="container m-3">

<form class="row g-3">
  <div class="col-md-6">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name='name' onChange={onChange} value={newWorker.name} />
  </div>
  <div class="col-md-6">
    <label for="age" class="form-label">Age</label>
    <input type="text" class="form-control" id="age" name='age' onChange={onChange} value={newWorker.age} />
  </div>
  <fieldset class="row my-3 mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" onChange={onChange} value="M" id="gender" name="gender" />
        <label class="form-check-label" for="gender">
          Male
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" onChange={onChange} value="F" name="gender" id="gender" />
        <label class="form-check-label" for="gender">
          Female
        </label>
      </div>
      <div class="form-check ">
        <input class="form-check-input" type="radio" onChange={onChange} value="O" name="gender" id="gender" />
        <label class="form-check-label" for="gender">
          Others
        </label>
      </div>
    </div>
  </fieldset>

  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control"  id="email" name='email' onChange={onChange} value={newWorker.email} />
  </div>

  <div class="col-md-6">
    <label for="contact" class="form-label">Contact</label>
    <input type="text" class="form-control"  id="contact" name='contact' onChange={onChange} value={newWorker.contact} />
  </div>
  <div class="col-12">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" name='address' placeholder="1234 Main St" onChange={onChange} value={newWorker.address} />
  </div>
  <div class="col-md-6">
    <label for="city" class="form-label">City</label>
    <input type="text" class="form-control" name='city' id="city" onChange={onChange} value={newWorker.city} />
  </div>
  <div class="col-md-4">
    <label for="services" class="form-label">Services</label>
    <select id="services" name='services' onChange={onChange} value={newWorker.services} class="form-select">
      <option selected>Baby sitter</option>
      <option selected>Cook</option>
      <option selected>Laundry</option>
      <option selected>Old age care</option>
      <option selected>Disable person's care</option>
      <option selected>Gardening</option>
      <option selected>Care taker</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="experience" class="form-label">Experience</label>
    <input type="text" class="form-control" id="experience" name='experience' onChange={onChange} value={newWorker.experience} />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        by registering yourself you agreeing to our privacy policies
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" onClick={handleAddWorker} class="btn btn-primary">Register</button>
  </div>
</form>
        </div>

        }
    </>
  )
}

export default RegisterWorker