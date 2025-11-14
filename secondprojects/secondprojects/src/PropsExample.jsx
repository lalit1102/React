import React from 'react'
import PropTypes from 'prop-types';
// const PropsExample = (props) => {
   const PropsExample = ({ myname = "lalit", myage = 29 }) => {
  return (
    <div>
      <h1>props Example</h1>
      <h2>my name is {myname}</h2>
      <h2>my age is {myage}</h2>
    </div>
  )
}
PropsExample.PropTypes = {
  myname:PropTypes.string.isRequired,
  myage:PropTypes.number.isRequired
}
// PropsExample.defaultProps = {
  // myname:"lalit",
  // myage:"29"
// }

export default PropsExample
