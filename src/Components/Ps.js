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
          <h2>PATENT STATISTICS</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>PATENT STATISTICS</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container' style={{textAlign:'center'}}> 
    <br />  <br />  <br />  <br />  <br />
  <div class="table-responsive">
    <table class="table table-borderless table-hover">
      <thead>
        <tr className='table-danger'>
          <th scope="col">Country</th>
          <th scope="col">Country	Count of Country</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td scope="row"> Australia</td>
          <td>13</td>
        </tr>
        <tr className='table-active'>
          <td  scope="row"><b>India</b></td>
          <td><b>636</b></td>
        </tr>
        <tr class="">
          <td scope="row">JAPAN</td>
          <td>1</td>
        </tr>
        <tr class="">
          <td scope="row">Korea</td>
          <td>2</td>
        </tr>
        <tr class="">
          <td scope="row">PCT</td>
          <td>1</td>
        </tr>
        <tr class="">
          <td scope="row">Singapore</td>
          <td>1</td>
        </tr>
        <tr class="">
          <td scope="row">US</td>
          <td>2</td>
        </tr>
        <tr class="table-danger">
          <td scope="row">Grand Total</td>
          <td>656</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />  <br />  <br />  <br />
    </div>
    </>
  )
}

export default Ps