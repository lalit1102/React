import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LongCrud from './long-method/LongCrud'
import Longme from './long-method/Longme'
import ShortCrud from './ShortCrud/ShortCrud'


function App() {
  

  return (
    <>
      {/* <LongCrud /> */}
      {/* <Longme /> */}
      <ShortCrud />
    </>
  )
}

export default App
