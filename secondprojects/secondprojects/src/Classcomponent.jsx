import { Component } from "react";

//class Classcomponent extends React.Component{
class Classcomponent extends Component{
  constructor(){
    super()
     this.state = {
      name:"Lalit",
      age:25,
      salary:35000,
      
     }
     this.handleclick = ()=> {
      this.setState({
        name:"Baldaniya",
       
       
      })
     }
     this.ageclick = ()=>{
      this.setState({
         age:27,
      })
     }
     this.salaryclick = ()=>{
      this.setState({
         salary:37000
      })
     }

  }
render(){
  return (

    <>
    <div>
      <h3>
        class component Example....
      </h3>
      <h4>Name is ==={this.state.name}</h4>
      <h4>age is ==={this.state.age}</h4>
      <h4>salary is ==={this.state.salary}</h4>
      <button onClick={this.handleclick}>change Name</button>
      <button onClick={this.ageclick}>change age</button>
      <button onClick={this.salaryclick}>change salary</button>
    </div>
    </>
  );
}


}
export default Classcomponent