import React from 'react'
import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

const Crud2 = () => {
  const [data,setData] = useState({
    name:"",
    email:""
  })
  const [id, setId] = useState(null)
  const [alldata, setAlldata] = useState([])
   
  const saveData = (e) => {
    e.preventDefault()
    if (id !== null) {
      const res = alldata.map((item, index) => (index === id ? data : item))
      setAlldata(res)
    } else {
      setAlldata([...alldata, data])
    }
    setId(null)
    setData({ name: "", email: "" })
  }
  const editData = (id) => {
    const res = alldata.find((i,index)=> index === id ) 
    setData(res)
    setId(id)
  }

  const deldata = (idx) => {
    const res = alldata.filter((i, index) => index !== idx)
    setAlldata(res)
  }
  
  return (
    <>
    <div>
      <Form name="frm" method="post" action="#" onSubmit={saveData}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter the Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
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
          {alldata.map((item, index) => (
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
    </>
  )
}

export default Crud2
