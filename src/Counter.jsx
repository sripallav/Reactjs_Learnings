import React, { useReducer, useState } from 'react'

function reducer(state,action){
    switch(action.type)
    {
        case "increment":
            return {count: state.count +1};
        case "decrement":
            return {count: state.count -1};
        case "reset":
            return {count:0};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div >
        <h1 style={{textAlign:'center'}}>Count={state.count}</h1>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        
        <button style={{padding:'10px 20px', marginRight:'50px'}} onClick={()=> dispatch({type:"increment"})}><h2>➕</h2></button>
        <button style={{padding:'10px 20px', marginRight:'50px'}} onClick={()=> dispatch({type:"decrement"})}><h2>➖</h2></button>
        <button style={{padding:'10px 20px', marginRight:'50px'}} onClick={()=> dispatch({type:"reset"})}><h2>Reset</h2></button>
        </div>
    </div>
  )
}

export default Counter