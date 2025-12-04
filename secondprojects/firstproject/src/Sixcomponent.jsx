import React from 'react'
import styled from 'styled-components'

const Sixcomponent = () => {
  const Card = styled.div `
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius:10px;
  padding:20px;
  width:300px;
  box-shadow:0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  `;
  const Title = styled.h2 `
  color: #333;
  font-size: 1.5rem;
  `;
  const Description = styled.p `
  color: #666;
  font-size: 1rem;
  margin: 10px 0;
  `;
  const Button = styled.button`
  background-color : ${(props)=> (props.primary ? '#5b93cfff' : '#6c757d')};
  color:white;
  border:none;
  padding:10px 18px;
  cursor: pointer;
  font-size: 1rem
  `;
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
      <Card>
      <Title>styled  components card</Title>
      <Description>This is a simple example of using styled- 
        components in React withought themes
      </Description>
      <Button primary>primary</Button>
      <Button style={{marginLeft:'10px'}}>secondary</Button>
      </Card>
    </div>
    </>
  )
}

export default Sixcomponent
