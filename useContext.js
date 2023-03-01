import "./App.css";
import{ BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useState,createContext } from "react";

export const Appcontext = createContext();
function App(){
  const [name,setusername]=useState("nithish");
return(
  <div className="App">
   <Appcontext.Provider value ={{username,setusername}}>
    <Router>
      <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/Login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path ="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </Router>
    </Appcontext.Provider>
  </div>
)
}

export default App;
