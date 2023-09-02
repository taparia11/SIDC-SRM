import React, { useEffect, useState } from 'react' 
import Printpatent from './Printpatent'
const Ps = (props) => {
  const [patent, setPatent] = useState([])
  const updatePatent = async () => {
    const url = "https://siiec.taparia11.repl.co/api/siiec/fetchallpatent";
    let dat = await fetch(url);
    let parsedData = await dat.json()
    setPatent(parsedData);
    console.log(parsedData)    //eslint-disable-next-line
    console.log("game")    //eslint-disable-next-line
  }
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        updatePatent();
        // https://siiec.taparia11.repl.co/api/siiec/fetchallpatent
        //eslint-disable-next-line
    }, [])
  return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>GRANTED PATENTS LIST</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>GRANTED PATENTS LIST</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container' style={{textAlign:'center'}}> <br /><br /><br />
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col" >Grant No.</th>
      <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Title &nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th scope="col" ></th>
    </tr>
  </thead>
  <tbody>
  {patent.map((element,a) => {
              
              return <Printpatent title={element.title} grantno={element.grantno} sno={++a}/>
            })}
    
  </tbody>
</table>
    
    </div>
    <br /><br /><br />
    </>
  )
}

export default Ps