import Menu from './Menu'
import './App.css'
import { Routes,Route } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import About1 from './About1'
import About2 from './About2'
function App() {
  

  return (
    <>
    <Menu />
    <Routes>
      <Route path = "/Home" element={<Home />} />
      <Route path = "/About" element={<About />}>
      <Route path = "About1" element={<About1 />} />
      <Route path = "About2" element={<About2 />} />
      </Route>
      <Route path = "/Contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App