import React from 'react'
import styled from 'styled-components'
// styled component using npm styled-components
const Fivecomponent = () => {
  let H1 = styled.h1 `
     color: red;
     background-color: yellowgreen;
  `;
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  return (
    <div>
      <h1>hello how are you</h1>
      <H1>welcome to react</H1>
      <Title>Hello World, this is my first styled component!</Title>;
    </div>
  )
}

export default Fivecomponent

