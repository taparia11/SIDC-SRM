import React from 'react'

const Navbar = () => {
  return (
    <>
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="/"><span>CI</span>AP</a></h1>
      {/* <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about" >About Us</a></li>
          <li className="dropdown"><a href="/"><span>INTELLECTUAL PROPERTY</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="ps">PATENT STATISTICS</a></li>
              <li><a href="dwps">DEPARTMENT WISE PATENT STATISTICS</a></li>
              <li><a href="ywps">YEAR WISE PATENT STATISTICS</a></li>
              <li><a href="gpl">GRANTED PATENTS LIST</a></li>
            </ul>
          </li>
          <li><a href="message">MESSAGE</a></li>
          <li className="dropdown"><a href="/"><span>EVENTS</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="events2021">2021</a></li>
              <li><a href="events2022">2022</a></li>
            </ul>
          </li>
          <li><a href="upcomingevents">UPCOMING EVENTS</a></li>
          <li><a href="news">NEWS</a></li>
          <li><a href="contact">Contact</a></li>

        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      

    </div>
  </header>
    </>
  )
}

export default Navbar