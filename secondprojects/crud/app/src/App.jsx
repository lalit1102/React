import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App () {
  return (
    <>
    <Router>
      <div className="App">
       <Navbar />

      </div>
    </Router>
    </>
  )
}

export default App


















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Rooms from './pages/Rooms';
// import Reservations from './pages/Reservations';
// import Guests from './pages/Guests';
// import Staff from './pages/Staff';
// import Reports from './pages/Reports';
// import Login from './pages/Login';
// import Feedback from './pages/Feedback';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/rooms" element={<Rooms />} />
//             <Route path="/reservations" element={<Reservations />} />
//             <Route path="/guests" element={<Guests />} />
//             <Route path="/staff" element={<Staff />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;