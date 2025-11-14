import React, { useState } from 'react';
import abc from './mystyle.module.css'

const Header = () => {
  const [color, setColor] = useState("black");
  const [backgroundColor,setbackgroundColor] = useState("yellow")

  const handleClick = () => {
    //  setColor("pink");
    // setbackgroundColor("blue")
    // setColor(prevColor => (prevColor === "black" ? "pink" : "black"));
    // setbackgroundColor(prevBg => (prevBg === "yellow" ? "blue" : "yellow"));
      setColor(color === "black" ? "pink" : "black");
      setbackgroundColor(backgroundColor === "yellow" ? "blue" : "yellow");
  };

  const myStyle = {
    color,
    backgroundColor:backgroundColor,
    textAlign: 'center',
    marginTop: '15px',
  };

  return (
    <div>
      <h1 style={myStyle}>Welcome to react </h1>
      <button onClick={handleClick}>click me</button>
      <div className={abc.box}></div>
    </div>
  );
};

export default Header;
