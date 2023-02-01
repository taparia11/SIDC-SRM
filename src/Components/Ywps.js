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
          <h2>YEAR WISE PATENT STATISTICS</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>YEAR WISE PATENT STATISTICS</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container' style={{textAlign:'center'}}> <br /><br />
    <table class="table table-bordered border-primary">
  <thead>
    <tr class="table-primary">
      <th scope="col">Year</th>
      <th scope="col">NO.OF PATENTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2012</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2015</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>6</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>79</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>120</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>62</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>210</td>
    </tr>
    <tr>
      <td>2021</td>
      <td>61</td>
    </tr>
    <tr>
      <td>2022</td>
      <td>116</td>
    </tr>
    <tr class="table-primary">
      <td>Grand Total</td>
      <td>656</td>
    </tr>
  </tbody>
</table>
    </div>
    </>
  )
}

export default Ps