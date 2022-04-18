import React,{useEffect} from 'react'
// import Client from './Scomponents/Client'

const Home = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        //eslint-disable-next-line
    }, [])
  return (
   <>
   <br /><br /><br /><br />
   <section id="about-us" className="about-us">
      <div className="container" data-aos="fade-up">
        <div className="row content">
            <h3 style={{textAlign: 'center', fontWeight: '900'}}>SRMIST is a frontrunner in the area of Intellectual Property (IP) filing and Commercialization. SRMIST has been one of the very few institutions with much diverged area of fields in which our IPs are filed. The entire IP activities of SRMIST is managed by the CENTRE FOR INTELLECTUAL ASSET PROTECTION (CIAP).</h3>  
        </div>
      </div>
    </section>
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
          <h3 style={{textAlign: 'center'}}>Being the single point of contact for all the stakeholders in the Intellectual Property Protection at SRM IST, Kattankulathur, The Centre for Intellectual Asset Protection (CIAP) engages in guiding, protecting, managing, and commercializing the Intellectual Properties of our students and faculty members. We also continuously engage our management team to serve you in the best possible way through various awareness programs, development programs every month to train you in protecting your own intellectual inventions.</h3>
      </div>
    </section>
    {/* <Client /> */}
   </>
  )
}

export default Home