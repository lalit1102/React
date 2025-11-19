import React, { useEffect, useState } from 'react'
// import axios from 'axios';
const ApiExample = () => {
  const [userdata,setUserData] = useState([]);
  useEffect(()=> {
    // axios.get('https://fakestoreapi.com/users')
          // .then((res) => console.log(res))
          // .then((res)=>setUserData(res))



    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then((data)=> setUserData(data))
      .catch((err)=> {
        console.log(err)
        console.log("error in api")
      })
  },[])
  return (
    <div>
     <h3>Api Example</h3>
     <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone No</th>
          
        </tr>
      </thead>
      <tbody>
      {
        userdata.map((i)=>{
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.username}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
            </tr>
          )
        })
      }
        
        
        
      </tbody>
     </table>

    </div>
  )
}

export default ApiExample
