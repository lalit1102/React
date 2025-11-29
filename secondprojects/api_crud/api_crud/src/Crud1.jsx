import React from "react";
import { useState } from "react";
import { Form, Button ,Table } from "react-bootstrap";

const Crud1 = () => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [data, setData] = useState([]);
  const [id,setId] = useState("")

  const saveData = (e) => {
    e.preventDefault()

    if (id!== "") {
      let res = data.map((i,index)=>{
        if (index == id ){
          i.name = name
          i.email = email
          }
        return i
      })
      setData(res)
    } else {
      setData([
      ...data,
      {name,email}
    ])
    setName("")
    setEmail("")
    }
    
  }
  const editData = (id) => {
    const res = data.find((i,index)=> index=== id)
    setName(res.name)
    setEmail(res.email)
    setId(id)


  }
  const deldata = (id) => {
    const res = data.filter((i,index)=> index !== id)
    setData(res)
  }
  return (
    <div>
      <Form name="frm" method="post" action="#" onSubmit={saveData}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter the Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">Primary</Button>
        </Form.Group>
      </Form>
      <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button variant="secondary" size="sm" className="me-2" onClick={()=>editData(index)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => deldata(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Crud1;
