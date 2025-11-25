import React from 'react'
import {Link} from 'react-router'

const Menu = () => {
  return (
    <>
    <Link to="/Home">Home</Link> <br />
    <Link to="/About">About</Link> <br /> 
    <Link to = "/About/About1">About1</Link>
    <Link to = "/About/About2">About2</Link>
    <Link to="/Contact">Contact</Link> <br />
    </>
    
    
    
  )
}

export default Menu