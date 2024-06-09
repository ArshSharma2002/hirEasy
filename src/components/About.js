import React from 'react'
import abhishek from './images/abhishek-pro.png'
import parth from './images/parth-pro.png'
import arsh from './images/arsh-pro.png'

const About = () => {
  return (
    <div>

    <div className="aboutus container my-5 p-4 marketing min-vh-100">
    {/* <!-- Three columns of text below the carousel --> */}
    <div className="row">
      <div className="col-lg-4">
        <img className="bd-placeholder-img aboutProfiles rounded-circle" width="140" height="140" src={parth} alt="..." />

        <h2>Parth</h2>
        <p>we are the founders of HirEasy <br /> connect to us </p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://www.instagram.com/parth_sharma101/?hl=en"><i className="socials fa fa-instagram"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="/"><i className="socials fa-brands fa-linkedin"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://github.com/parthvashishtha"><i className="socials fa-brands fa-github"></i></a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div className="col-lg-4">
        
      <img className="bd-placeholder-img aboutProfiles rounded-circle" width="140" height="140" src={arsh} alt="..." />

        <h2>Arsh</h2>
        <p>we are the founders of HirEasy <br /> connect to us </p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://www.instagram.com/its_arsh_sharma/?hl=en"><i className="socials fa fa-instagram"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://www.linkedin.com/in/arsh-sharma-6747a6211/"><i className="socials fa-brands fa-linkedin"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://github.com/ArshSharma2002"><i className="socials fa-brands fa-github"></i></a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div className="col-lg-4">
        
      <img className="bd-placeholder-img aboutProfiles rounded-circle" width="140px" height="140px" src={abhishek} alt="..." />

        <h2>Abhishek</h2>
        <p>we are the founders of HirEasy <br /> connect to us </p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://www.instagram.com/i.m.abhisharma_official/?hl=en"><i className="socials fa fa-instagram"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://www.linkedin.com/in/abhishek-sharma-b6a67a203/"><i className="socials fa-brands fa-linkedin"></i></a></p>
        <p className="paraSocials" ><a className="" target='__blank' href="https://github.com/AbhiSharma-007"><i className="socials fa-brands fa-github"></i></a></p>
      </div>
    </div>
    </div>
    </div>

  )
}

export default About