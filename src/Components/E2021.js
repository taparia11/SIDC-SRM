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
          <h2>EVENTS 2021</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>EVENTS 2021</li>
          </ol>
        </div>

      </div>
    </section>
    
    <div className='container'> <br /><br />
    <ul style={{listStyle:"none"}}>
      <li><b>1.</b> Organized a Webinar on <b> “Successful Patents by Indian Researchers” </b>for <b> WORLD IP DAY, 26 APRIL,2021</b>.</li>
      <li><b>2.</b> Presented a Webinar on “Creating & Developing a Tech Start-up” for Department of EIE, Velammal Engineering College on 21st Aug, 2021.</li>
      </ul> 
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />     
    </div>
    </>
  )
}

export default Ps