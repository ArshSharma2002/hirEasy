import React from 'react'
import Login from './Login'

const Contactus = () => {

  const token = localStorage.getItem('token')

  
  // const userMailId = document.getElementById('userMailId').value
  // const userEnquiry = document.getElementById('userEnquiry').value

  return (
    <div>
    {!token ? <Login/>:
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Have Queries ?</h1>
        <p className="col-lg-10 fs-4">contact us right now !!! . we are available 24/7 for you.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input id="userMailId" type="email" className="form-control" placeholder="name@example.com"/>
            <label htmlFor="floatingInput"><i className="fa fa-user"></i> Email address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea type="text" style={{height: "159px"}} className="form-control" id="userEnquiry" placeholder="Password"/>
            <label htmlFor="floatingPassword"><i className="fa fa-envelope"></i> Enquiry / Message</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          {/* <button className="w-100 btn btn-lg btn-primary" type="submit"><a className='' href = {`mailto:sharmaarsh222@gmail.com?subject=Query from ${userMailId}&body=${userEnquiry}`}>Send Email</a></button> */}
          <hr className="my-4"/>
          <small className="text-muted">By clicking Submit, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  <div></div></div>
}
</div>
  )
}

export default Contactus