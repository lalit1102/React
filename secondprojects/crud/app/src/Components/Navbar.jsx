import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark  navcolor px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold rainbow " to="/">Jay Dwarkadhish</Link>
        <button  className="navbar-toggler"><span></span></button>
        <div>
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>Dashboard</Link></li>
            <li><Link>Rooms</Link></li>
            <li><Link>Reservations</Link></li>
            <li><Link>Staff</Link></li>            
            <li><Link>Reservations</Link></li>
            <li><Link>Feedback</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar















// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <div className="container-fluid">

      
//         <Link className="navbar-brand fw-bold  rainbow-animated-text " to="/">
//           Jay Dwarkadhish
//         </Link>

        
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

        
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/rooms">Rooms</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/reservations">Reservations</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/guests">Guests</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/staff">Staff</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/reports">Reports</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/feedback">Feedback</Link>
//             </li>

            
//             <li className="nav-item">
//               <Link className="btn btn-warning ms-2" to="/login">Login</Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
