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
          <p>This is CIAP Dedicated Team</p>
        </div>

        <div className="row">
                   <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                      <div className="member-img">
                        <img src="https://srmiiec.com/static/media/shantanu.87d11b9e953c4abc624e.jpg" style={{height:"300px", width:"300px"}} className="img-fluid" alt="Team Member "/>
                        <div className="social">
                          <a href="/"><i className="bi bi-twitter"></i></a>
                          <a href="/"><i className="bi bi-facebook"></i></a>
                          <a href="/"><i className="bi bi-instagram"></i></a>
                          <a href="/"><i className="bi bi-linkedin"></i></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Dr. Shantanu Patil</h4>
                        <span>ASSOCIATE DIRECTOR, IIEC</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                      <div className="member-img">
                        <img src="https://srmiiec.com/static/media/Ananth_Kmar.b0956e65ecf6ca7425c1.jpg" style={{height:"300px", width:"300px"}} className="img-fluid" alt="Team Member "/>
                        <div className="social">
                          <a href="/"><i className="bi bi-twitter"></i></a>
                          <a href="/"><i className="bi bi-facebook"></i></a>
                          <a href="/"><i className="bi bi-instagram"></i></a>
                          <a href="/"><i className="bi bi-linkedin"></i></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Dr. Ananth Kumar</h4>
                        <span>CHIEF INNOVATION OFFICER, IIEC</span>
                      </div>
                    </div>
                  </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src="https://www.srmiiec.com/static/media/Vijay.2024f2fe2df1e21b1056.jpeg" style={{height:"300px", width:"300px"}} className="img-fluid" alt="Team Member "/>
                <div className="social">
                  {/* <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a> */}
                  <a href="https://www.linkedin.com/in/j-vijay-rathan-lingaa-80697723"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Mr. Vijay Rathan Linga</h4>
                <span>Techno Legal Advisor</span>
              </div>
            </div>
          </div>


{/* 
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
          </div>  */}

        </div>

      </div>
    </section>
   </>
  )
}

export default About