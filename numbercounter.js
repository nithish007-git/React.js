import "./App.css";
import {useState} from "react";

function App(){
  const [text,setcolor]=useState(0); //state 
  return(
    <div className="App">
      <button onClick={()=>{
        setcolor(text+1)
        console.log(text)
      }}
      >Increase</button>

<button onClick={()=>{
        setcolor(text-1)
        console.log(text)
      }}
      >Decrease</button>
      

      <button onClick={()=>{
        setcolor(0)
        console.log(text)
      }}
      >ZERO</button>

      <h2>{text}</h2>
    
    </div>




  )
}
export default App;
