import React from "react";

//const Secondcomponents = (props) => {
const Secondcomponents = ({ myname, myage, sal }) => {
  // props is immutabeld and value cant be change
  return (
    <div>
      <h3>second component created</h3>
      {/* <h4>name is ----{props.myname}</h4> */}
      {/* <h4>age is ----{props.myage}</h4> */}
      {/* <h4> salary ----{props.sal}</h4> */}
      <h4>name is ----{myname}</h4>
      <h4>age is ----{myage}</h4>
      <h4> salary ----{sal}</h4>
    </div>
  );
};

export default Secondcomponents;
