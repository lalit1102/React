import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Stack } from 'react-bootstrap';

const Seven = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" >
      <button className="btn btn-success">click me!</button>
      <button className='btn btn-danger mx-3'>delete</button>
      <hr />
      <br />
       </div>
       <div>
      <Stack direction="horizontal" gap={2}>
           <Button as="a" variant="primary">Button as link </Button>
          <Button as="a" variant="success">Button as link</Button>
      </Stack>;
      </div>
   

   
   
   
    </>
  )
}

export default Seven
