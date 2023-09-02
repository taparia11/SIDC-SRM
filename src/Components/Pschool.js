import React, {useEffect} from 'react'

const Ps = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        //eslint-disable-next-line
    }, [])
  return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>PATENT SCHOOL</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>PATENT SCHOOL</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container' style={{textAlign:'center'}}> <br /><br />
      <div className="container" data-aos="fade-up">
        <div className="row content">
            <h3 style={{textAlign: 'center', fontWeight: '300'}}>CIAP is highly committed in developing faculty members and student’s expertise on IPR and we do improve the same through our custom designed IPR workshop which is known as <b> “PATENT SCHOOL”</b>.<br />
Since 2021, this patent school is conducted once in each semester. We have successfully organized four editions in the year 2021 and 2022.</h3>  
        </div>
      </div>
    </div> <br /><br /><br />
    
    <h4>&nbsp;&nbsp;&nbsp;List of Patent School Workshops</h4>
    <ol style={{marginLeft:"10px"}}>
      <li style={{fontSize:"20px",}}>Successfully organized two editions of PATENT SCHOOL WORKSHOP SERIES in the year 2021. <br />
      <ul style={{listStyle:"disc"}}>
        <li>First Edition – Feb 2021 – April 2021</li>
        <li>Second Edition  - Aug 2021 – Sep 2021</li>
        </ul>
        </li>
        <br /><br />
      <li style={{fontSize:"20px",}}>Successfully organized two editions of PATENT SCHOOL WORKSHOP SERIES in the year 2022. <br />
      <ul style={{listStyle:"disc"}}>
        <li>Third Edition – 7th – 9th April 2022 &nbsp;&nbsp; <a href="https://tinyurl.com/APREVE1" class="btn btn-success">Photos</a></li>
        <li>Fourth Edition  – 13th – 15th October, 2022 &nbsp;&nbsp; &nbsp;&nbsp;<a href="https://tinyurl.com/OCTCIAPEVE2" class="btn btn-success">Photos</a></li>
        </ul>
        </li>
        
    </ol>
    <br /><br />
    </>
  )
}

export default Ps