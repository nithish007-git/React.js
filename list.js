import React from 'react'
import Listcomp from './listcomp';

const App = () => {
  const list1 =[
    {
      id:1,
      name:"nithish",
      std:"hello",
    },
    {
      id:2,
      name:"nithish12",
      std:"hello1",
    },

  ];
  return (
    <>
    {  list1.map((items)=>(<Listcomp  key={items.id}name={items.name} std={items.std}/>))
}
    </>
    
  )
}

export default App
