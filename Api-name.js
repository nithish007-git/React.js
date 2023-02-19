import "./App.css";
import {useEffect,useState} from "react";
import Axios from "axios";

function App(){
  const [name,getname]=useState("");
  const [age,getage]=useState(null);
  const Api = ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    getage(res.data.age );
    });
  }

  return(
    <div className="App">
      <input placeholder="ex.Nithish" 
      onChange={(event)=>{
        getname(event.target.value);
      }}
      />
      <button onClick={Api}>Perdict Name</button>
      <h3>Age:{age}</h3>
      <h3>name:{name}</h3>
    </div>
  )
}
export default App;
