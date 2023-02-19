import "./App.css";
import {useEffect,useState} from "react";
import Axios from "axios";

function App(){
  const [party,setparty]=useState("");
  const[Family,setFamily]=useState("");
   const[Office,setOffice]=useState("");

  const party1=()=>{
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res)=>{
      setparty(res.data[0].excuse);

    }
    )
  }
  const family=()=>{
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res)=>{
      setparty(res.data[0].excuse);

    }
    )
  }

  const office=()=>{
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res)=>{
      setparty(res.data[0].excuse);

    }
    )
  }

  return(
    <div className="App">
      <h1>Genrate An Excuse</h1>
      <button onClick={party1}>Party</button>
      <button onClick={family}>Family</button>
      <button onClick={office}>Office</button>
      <p>{party}</p>
      <p>{Family}</p>
    </div>
  )

}
export default App;
