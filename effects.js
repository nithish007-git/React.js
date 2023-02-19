import "./App.css";
import {useEffect,useState} from "react";
import Axios from "axios";

function App(){
  const [Fact,setFact]=useState("");

  const fetchCat =()=>{
    Axios.get("https://catfact.ninja/fact").then((result)=>{
      setFact(result.data.fact);
    });


  }
 
  // useEffect(()=>{
  //   Axios.get("https://catfact.ninja/fact").then((result)=>{
  //     setFact(result.data.fact);
  //   });

  // },[]);

  return(
    <div className="App">
      <button onClick={fetchCat}>Showtext</button>
      <p>
        {Fact}
      </p>

    </div>
  )
}
export default App;
