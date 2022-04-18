import React, {useEffect} from 'react'

const About = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        //eslint-disable-next-line
    }, [])

  return (
   <>
   <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>About</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Our <strong>Team</strong></h2>
          <p>This is SIDC Dedicated Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="Team Member "/>
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="Team Member "/>
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="Team Member "/>
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="Team Member "/>
                <div className="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
   </>
  )
}

export default About