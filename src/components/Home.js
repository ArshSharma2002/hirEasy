import React from 'react'
import slide1 from './images/bai.jpg'
import slide2 from './images/cloth-wash-1.jpg'
import slide3 from './images/baby-sitter-2.jpg'

import feat1 from './images/jhadu-pocha.jpg'
import feat2 from './images/oldage-1.jpg'
import feat3 from './images/baby-sitter-1.jpg'


const Home = () => {
  return (
    <div>
        <main>
    
    <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">

          <img width="100%" height="100%" alt='...' className="blur-bg"  src={slide1} />
  
          <div className="container">
            <div className="carousel-caption text-start text-dark">
              <h1 className='fw-bold' >Struggling in finding maids ?</h1>
              <p>Then you are at right place. we'll provide best services.</p>
              <p><a className="btn btn-lg btn-danger" href="/signup">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          
          <img width="100%" height="100%" alt='...' className="blur-bg" src={slide2} />
  
          <div className="container">
            <div className="carousel-caption text-dark">
              <h1 className='fw-bold'>Are you looking for a job and want to provide services?</h1>
              <p>Sign up today as a worker and get hired by clients today.</p>
              <p><a className="btn btn-lg btn-danger" href="/registerworker">Register now</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">

          <img width="100%" height="100%" alt='...' className="blur-bg" src={slide3} />

          <div className="container">
            <div className="carousel-caption text-end text-dark">
              <h1 className='fw-bold'>Explore services we provide.</h1>
              <p>Select the service and get the right match for you.</p>
              <p><a className="btn btn-lg btn-danger" href="/services">Browse services</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  
  
    {/* <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. --> */}
  
    <div className="container marketing">
  
  
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">We provide best cooks for your family. <span className="text-muted">It’ll blow your mind.</span></h2>
          <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">

          <img width="100%" height="100%" alt='...' className="" src={feat1} />
  
        </div>
      </div>
  
      <hr className="featurette-divider"/>
  
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Get best caretakers for your family. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div className="col-md-5 order-md-1">

          <img width="100%" height="100%" alt='...' className="" src={feat2} />
  
        </div>
      </div>
  
      <hr className="featurette-divider"/>
  
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">We provide services PAN India. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
        <div className="col-md-5">

          <img width="100%" height="100%" className="" alt='...' src={feat3} />
  
        </div>
      </div>
  
      <hr className="featurette-divider"/>
  
      {/* <!-- /END THE FEATURETTES --> */}
  
    </div>
    {/* <!-- /.container --> */}
  </main>
    </div>
  )
}

export default Home