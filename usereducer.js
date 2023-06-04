import React, { useReducer, useState } from 'react';
import Button from './components/UI/Button/Button';
import { Intialstate, Postreducer } from './postreducer';


const Usered = () => {

    const [reducer ,dispach] =useReducer(Postreducer,Intialstate)
    const handler=(event)=>{
        dispach({type:"FETCH_START"})
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            return res.json()
        })
        .then ((data)=>{
            console.log(data.title)
            dispach({type:"FETCH_SUCCESS",payload:data.title});

            
        })
        .then ((erro)=>{
            dispach({type:"FETCH_ERROR"});
        })

    }
  return (
    <>
    <button onClick={handler}>
    {"fetch the post"}</button>

    <p>{reducer.post.title}</p>
    </>

  )
}

export default Usered
