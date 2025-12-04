import { useState } from "react";

function Crud2() {
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]:value
    })
  };
  const [id,setId] = useState("")
    const [alldata,setAlldata] = useState([])
  const savedata = (e) => {
    e.preventDefault()

    if(id !== "") {
      const res = alldata.map((i,index)=>(id==index)?data:i)
      console.log("here updated data",data)
      setAlldata(res)
    } else {
      
      setAlldata([...alldata,data])
    }
    setId("")
    setData({
      name:""
    });
  }
  const deldata = (id) => {
    const res = alldata.filter((i,index)=>index !==id)
    setAlldata(res)

  }

  const editdata = (id) => {
    const res = alldata.find((i,index)=>index === id)
    setData(res)
    console.log("here edit data",res)
    setId(id)
  }
  return (
    <>
      <div>
        <form action="#" method="post" name="frm" onSubmit={savedata}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
          <button>save</button>
        </form>
        <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i,index)=>{
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td >
                      <button onClick={()=>deldata(index)}>delete</button>
                      <button onClick={() => editdata(index)}>Edit</button>
                    </td>
                  </tr>
                )
              } )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Crud2;
