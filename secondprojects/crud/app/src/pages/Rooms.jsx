// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Rooms = () => {
//   const rooms = [
//     { id: 1, number: "101", type: "Deluxe", price: 1500, status: "Available", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" },
//     { id: 2, number: "102", type: "Suite", price: 5000, status: "Occupied", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" },
//     { id: 3, number: "201", type: "super Deluxe", price: 2000, status: "Available", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop" },
//     { id: 4, number: "202", type: "Deluxe", price: 1500, status: "Maintenance", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" },
//     { id: 5, number: "301", type: "Super Deluxe", price: 2000, status: "Available", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop" },
//     { id: 6, number: "302", type: "Suite", price: 5000, status: "Occupied", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" },
//   ];

//   const getBadgeClass = (status) => {
//     if (status === "Available") return "bg-success";
//     if (status === "Occupied") return "bg-danger";
//     if (status === "Maintenance") return "bg-warning text-dark";
//     return "bg-secondary";
//   };

//   return (
//     <div className="container my-5">
//       {/* Page Header */}
//       <div className="text-center mb-4">
//         <h1 className="fw-bold">🛏️ Rooms Management</h1>
//         <p className="text-muted">Manage hotel rooms and availability</p>
//       </div>

//       {/* Rooms Grid */}
//       <div className="row g-4">
//         {rooms.map((room) => (
//           <div key={room.id} className="col-md-4 col-lg-3">
//             <div className="card shadow-sm">
//               <img
//                 src={room.image}
//                 alt={`Room ${room.number}`}
//                 className="card-img-top"
//                 style={{ height: "180px", objectFit: "cover" }}
//               />

//               <div className="card-body">
//                 <div className="d-flex justify-content-between mb-2">
//                   <h5 className="card-title mb-0">Room {room.number}</h5>
//                   <span className={`badge ${getBadgeClass(room.status)}`}>
//                     {room.status}
//                   </span>
//                 </div>

//                 <p className="mb-1 text-muted">{room.type}</p>

//                 <div className="d-flex justify-content-between align-items-center mt-3">
//                   <span className="fw-bold">₹{room.price}/night</span>
//                   <button className="btn btn-primary btn-sm">View Details</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Rooms;
