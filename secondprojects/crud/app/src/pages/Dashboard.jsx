// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


// const Dashboard = () => {
//   return (
//     <div className="container py-4">


//       <h1 className="text-center mb-4 fw-bold">📊 Dashboard</h1>

//       <div className="row g-4">

//         <div className="col-md-3 col-sm-6">
//           <div className="card shadow h-100">
//             <img
//               src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop"
//               className="card-img-top"
//               alt="Rooms"
//             />
//             <div className="card-body text-center">
//               <h5>Total Rooms</h5>
//               <h2 className="fw-bold text-primary">120</h2>
//               <p className="text-muted">45 Available</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3 col-sm-6">
//           <div className="card shadow h-100">
//             <img
//               src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop"
//               className="card-img-top"
//               alt="Reservations"
//             />
//             <div className="card-body text-center">
//               <h5>Reservations</h5>
//               <h2 className="fw-bold text-success">85</h2>
//               <p className="text-muted">Today's Check-ins</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3 col-sm-6">
//           <div className="card shadow h-100">
//             <img
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop"
//               className="card-img-top"
//               alt="Guests"
//             />
//             <div className="card-body text-center">
//               <h5>Active Guests</h5>
//               <h2 className="fw-bold text-warning">156</h2>
//               <p className="text-muted">Currently Staying</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3 col-sm-6">
//           <div className="card shadow h-100">
//             <img
//               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
//               className="card-img-top"
//               alt="Revenue"
//             />
//             <div className="card-body text-center">
//               <h5>Revenue</h5>
//               <h2 className="fw-bold text-danger">$45,230</h2>
//               <p className="text-muted">This Month</p>
//             </div>
//           </div>
//         </div>

//       </div>

     
//       <div className="row mt-5 g-4">

       
//         <div className="col-lg-6">
//           <div className="card shadow">
//             <div className="card-body">
//               <h4 className="fw-bold mb-3">Recent Activities</h4>

//               <div className="list-group">

//                 <div className="list-group-item d-flex align-items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1583596608816-20dc8b46fced?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     className="rounded-circle me-3"
//                     width="60"
//                     height="60"
//                     alt=""
//                   />
//                   <div>
//                     <p className="mb-0 fw-bold">Ansh Baldaniya</p>
//                     <small className="text-muted">2 hours ago</small>
//                   </div>
//                 </div>

//                 <div className="list-group-item d-flex align-items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1614031690812-c20810796cb9?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     className="rounded-circle me-3"
//                     width="60"
//                     height="60"
//                     alt=""
//                   />
//                   <div>
//                     <p className="mb-0 fw-bold">Arjun Mahant</p>
//                     <small className="text-muted">5 hours ago</small>
//                   </div>
//                 </div>

//                 <div className="list-group-item d-flex align-items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     className="rounded-circle me-3"
//                     width="60"
//                     height="60"
//                     alt=""
//                   />
//                   <div>
//                     <p className="mb-0 fw-bold">Ashutosh kumar</p>
//                     <small className="text-muted">1 day ago</small>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

        
//         <div className="col-lg-6">
//           <div className="card shadow">
//             <img
//               src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop"
//               className="card-img-top"
//               alt="Hotel Overview"
//             />
//             <div className="card-body">
//               <h4 className="fw-bold">Hotel Overview</h4>
//               <p className="text-muted">A quick glance at your hotel's activities.</p>
//             </div>
//           </div>
//         </div>

//       </div>

//       <h3 className="mt-5 fw-bold text-center">⭐ Guest Reviews</h3>

//       <div className="row mt-3 g-4">

//         {[
//           {
//             name: "Arjun",
//             rating: "⭐⭐⭐⭐⭐",
//             review:
//               "Excellent service & beautiful rooms. Staff was very helpful.",
//             date: new Date().toLocaleDateString(),
//             room: "Room 201",
//             img: "https://images.unsplash.com/photo-1614031690812-c20810796cb9?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             name: "Ansh ",
//             rating: "⭐⭐⭐⭐⭐",
//             review:
//               "Amazing experience! Clean, comfortable & delicious breakfast.",
//             date: new Date().toLocaleDateString(),
//             room: "Room 305",
//             img: "https://images.unsplash.com/photo-1583596608816-20dc8b46fced?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           },
//           {
//             name: "Parth",
//             rating: "⭐⭐⭐⭐",
//             review:
//               "Great location & friendly staff. Very spacious rooms.",
//            date: new Date().toLocaleDateString(),
//             room: "Room 102",
//             img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
//           },
//           {
//             name: "Pooja",
//             rating: "⭐⭐⭐⭐⭐",
//             review:
//               "Perfect stay! warm welcoming services & concierge were excellent.",
//             date: new Date().toLocaleDateString(),
//             room: "Room 401",
//             img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//           },
//         ].map((r, index) => (
//           <div className="col-md-6 col-lg-3" key={index}>
//             <div className="card h-100 shadow">
//               <div className="card-body">
//                 <div className="d-flex align-items-center mb-3">
//                   <img
//                     src={r.img}
//                     className="rounded-circle me-3"
//                     width="60"
//                     height="60"
//                     alt={r.name}
//                   />
//                   <div>
//                     <h5 className="mb-0">{r.name}</h5>
//                     <span>{r.rating}</span>
//                   </div>
//                 </div>
//                 <p className="text-muted">"{r.review}"</p>
//                 <div className="d-flex justify-content-between">
//                   <small>{r.date}</small>
//                   <small>{r.room}</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Dashboard;
