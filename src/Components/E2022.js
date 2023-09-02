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
          <h2>EVENTS 2022</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>EVENTS 2022</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container'> <br /><br />
    <ul style={{listStyle:"none"}}>
        <li><b>1.</b> The CIAP organised a seminar on <b> “CREATION OF VALUABLE PATENTS AND SUCCESSFUL COMMERCIALISATION”</b> on <b>26th February, 2022</b>. This event had its distinguished speakers Adv.A.K.Balaji & Adv.S.Nithya from R.K.Dewan & Co, Chennai.  &nbsp;&nbsp; <a href="https://photos.app.goo.gl/spiJwAu66p3dKSCj8" class="btn btn-success">Photos</a></li>
        <li><b>2.</b> The CIAP organised a seminar on “EXPLORING THE JOURNEY OF IDEA TO COMMERCIALISATION” on 11th March, 2022. Mr.J.Vijay Rathan Lingaa, Techno-Legal Advisor, CIAP was the speaker of this event.&nbsp;&nbsp;<a href="https://photos.app.goo.gl/yQkX4DUpocMYHqf9A" class="btn btn-success">Photos</a></li>
        <li><b>3.</b>The CIAP organised a seminar on “AWARENESS ON INTELLECTUAL PROPERTY RIGHTS” on 18th March, 2022. This event had our proud alumni Mr. M. Madhanraj who is currently The Examiner of Patents & Designs, Intellectual Property Office, Guindy as the speaker&nbsp;&nbsp;<a href="https://photos.app.goo.gl/gkQHgbvECWi1hFRD6" class="btn btn-success">Photos</a></li>
        <li><b>4.</b> The CIAP organised PATENT SCHOOL WORKSHOP from 7th to 9th of April, 2022. This event had its distinguished speakers Dr. A. Balaji Ganesh, Mrs. P. Ilanangai & Dr. Amirdha Sher Gill.&nbsp;&nbsp;<a href=" https://tinyurl.com/APREVE1" class="btn btn-success">Photos</a></li>
        <li><b>5.</b> The CIAP organised a seminar on “EXPLORING THE JOURNEY OF IDEA TO COMMERCIALISATION” on 15th June, 2022. Mr. J. Vijay Rathan Lingaa, Techno-Legal Advisor, CIAP was the speaker of this event.&nbsp;&nbsp;<a href="https://tinyurl.com/Juneevent1" class="btn btn-success">Photos</a></li>
        <li> &nbsp;&nbsp;<a href="" class="btn btn-success">Photos</a></li>
        <li> &nbsp;&nbsp;<a href="" class="btn btn-success">Photos</a></li>
        </ul>
    </div>
    </>
  )
}

export default Ps