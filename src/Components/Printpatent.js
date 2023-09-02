import React from 'react'

const Printpatent = (props) => {
  return (
    <tr>
      <th scope="row">{props.sno}</th>
      <td>{props.title}</td>
      <td colspan="2">{props.grantno}</td>
    </tr>
  )
}

export default Printpatent;
