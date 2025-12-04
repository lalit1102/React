// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-page">

    
//       <section className="hero-section d-flex align-items-center text-center">
//         <div className="hero-content">
//           <h1 className="display-4 fw-bold">Welcome to Jay Dwarkadhish Hotel</h1>
//           <p className="lead">
//             Experience luxury, comfort, and the divine hospitality of Dwarka.
//           </p>
//           <Link to="/rooms">
//             <Button variant="warning" size="lg">Book Your Stay</Button>
//           </Link>
//         </div>
//       </section>

    
//       <Container className="my-5">
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img
//               src="src/assets/dwarkadhish.jpg"
//               alt="Hotel"
//               className="img-fluid rounded shadow"
//             />
//           </Col>

//           <Col md={6} className="text-center text-md-start mt-4 mt-md-0">
//             <h2 className="fw-bold">About Our Hotel</h2>
//             <p className="mt-3">
//               Located near the holy Dwarkadhish temple, our hotel offers premium
//               rooms, 24/7 service, modern amenities, and an unforgettable divine
//               experience. Perfect for families, solo travelers, and groups.
//             </p>

//             <Link to="/about">
//               <Button variant="dark" className="mt-2">Learn More</Button>
//             </Link>
//           </Col>
//         </Row>
//       </Container>

     
//       <section className="rooms-section py-5 bg-light">
//         <Container>
//           <h2 className="text-center fw-bold mb-4">Our Premium Rooms</h2>

//           <Row className="g-4">
//             <Col md={4}>
//               <div className="room-card shadow-sm p-3 rounded text-center">
//                 <img src="src/assets/delux.jpg" className="img-fluid rounded" />
//                 <h4 className="mt-3">Deluxe Room</h4>
//                 <p>Comfortable king-size bed with AC, Wi-Fi, and complimentary breakfast.</p>
//                 <Link to="/rooms"><Button variant="warning">View Details</Button></Link>
//               </div>
//             </Col>

//             <Col md={4}>
//               <div className="room-card shadow-sm p-3 rounded text-center">
//                 <img src="src/assets/superdelux.jpg" className="img-fluid rounded" />
//                 <h4 className="mt-3">Super Deluxe</h4>
//                 <p>Large luxury rooms with city view, LED TV, and 24/7 room service.</p>
//                 <Link to="/rooms"><Button variant="warning">View Details</Button></Link>
//               </div>
//             </Col>

//             <Col md={4}>
//               <div className="room-card shadow-sm p-3 rounded text-center">
//                 <img src="src/assets/family.jpg" className="img-fluid rounded" />
//                 <h4 className="mt-3">Family Suite</h4>
//                 <p>Perfect for families with double bed setup, dining area, and balcony.</p>
//                 <Link to="/rooms"><Button variant="warning">View Details</Button></Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* SERVICES SECTION */}
//       <Container className="my-5">
//         <h2 className="fw-bold text-center mb-4">Hotel Facilities</h2>

//         <Row className="text-center g-4">
//           <Col md={3}><div className="service-box p-3 shadow-sm rounded">🏨 Free Wi-Fi</div></Col>
//           <Col md={3}><div className="service-box p-3 shadow-sm rounded">🍽 Restaurant</div></Col>
//           <Col md={3}><div className="service-box p-3 shadow-sm rounded">🚗 Parking</div></Col>
//           <Col md={3}><div className="service-box p-3 shadow-sm rounded">🛎 24/7 Staff</div></Col>
//         </Row>
//       </Container>

//       {/* CTA BANNER */}
//       <section className="cta-banner text-center text-white py-5">
//         <h2 className="fw-bold">Plan Your Perfect Stay Today!</h2>
//         <p>Your comfort is our priority.</p>
//         <Link to="/reservations">
//           <Button variant="light" size="lg">Make a Reservation</Button>
//         </Link>
//       </section>

//     </div>
//   );
// };

// export default Home;
