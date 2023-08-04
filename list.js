import React, { useEffect, useState } from 'react';
import Text from './text';


const App = () => {
  const [state,settate] =useState(false);
  const [text,settext] =useState(false);
  const setfunc =(event)=>{
    settate(true)
    settext(event.target.value)
  }

  useEffect(() =>{
    console.log("componet mountred")

    return(()=>{
      console.log("compound unmounted")
    })
  } ,[text])
  return (
    <div>
      <input onChange={setfunc} />
      { state && <Text bo={text}/>}
    </div>
  )
}

export default App
