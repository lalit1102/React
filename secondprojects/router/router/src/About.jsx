import React from 'react'
import { Outlet } from 'react-router'

const About = () => {
  return (
    <>
    <div>
      <h3>About working</h3>
      <Outlet/>
    </div>
    </>
  )
}

export default About