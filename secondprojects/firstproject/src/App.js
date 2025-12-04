// import logo from './logo.svg';
import './App.css';
import Firstcomponents from './Firstcomponents';
import Secondcomponents from './Secondcomponents';
import Stateexample from './Stateexample';
import BootstrapExample from './BootstrapExample';
import Materialui from './Materialui';
import Header from './Header';
import Fivecomponent from './Fivecomponent';
import Sixcomponent from './Sixcomponent';
import Seven from './Seven';

function App() {
  let name = "lalit"
  let age = 30
  let salary = 35000
  // const disp = ()=>{
    // alert("hello welcome to react")
  // }
  return (
    // 3 methode used in fragment
    // <Fragment></Fragment>
    // <React.Fragment></React.Fragment>
    <>
    <div>
     
      <h3>my first project</h3>
      {/* <h4>name is----{name}</h4> */}
      {/* <h4>age is----{age}</h4> */}
      {/* <h4>salary is----{salary}</h4> */}
      {/* <button onClick={disp}>add</button> */}
    
    </div>
    <div>
      <Firstcomponents/>
       <hr/>
      <Secondcomponents myname={name} myage={age} sal={salary}/>
       <hr/>
      <Stateexample/>
       <hr/>
      <BootstrapExample/>
       <hr/>
      <Materialui/>
       <hr/>
      <Header/>
       <hr/>
      <Fivecomponent/>
      <hr/>
      <Sixcomponent/>
      <hr/>
      <Seven/>
    </div>

    </>
  );
}

export default App;
