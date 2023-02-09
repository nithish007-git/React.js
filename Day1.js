import "./App.css";

// function App() {

//   return ( //componets passing value 
//     <div className="App">
//       <User salary ="nithish" position="nithish23@gmail.com" company="12"></User>
//       <User salary ="sm" position="kjzxn@gmail.com" company ="23"></User>

//     </div>
//   );
// }
// //props //componets
// const User = (props) =>{
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h2>{props.pos}</h2>
//       <h4> {props.company}</h4>
//     </div>
//   )
// }

function App(){
  // const age =20;
  // const isgreen = false;
  const names = ["nithish","hello","edd"];
  return ( 
<div className="App">
  {/* {age>18?<h1>Over age</h1> : <h1>under age</h1>}
  <h1 style ={{color:isgreen ? "green":"red"}}>color</h1> 
  {/* ternary Operator */}
  { names.map((name,key) =>{
    return <h1>{name}</h1>
  }
  )}
</div>
  );
}
const 

export default App;
