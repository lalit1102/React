import React from 'react'

const ApiCalling = () => {
  const [userdata,setUserData] = useState([]);
   useEffect(()=> {
   axios.get('https://fakestoreapi.com/users')
         // .then((res) => console.log(res))
          .then((res)=>setUserData(res))
   },[])
  return (
    <div>
 <h3>Api axiosghway Example</h3>
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

export default ApiCalling
