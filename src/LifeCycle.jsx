import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [name, setname] = useState("");
    const [count, setcount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted/Updated");

        //unmounting
        return()=>{
            console.log("Component Unmounted");
        }
    },[count]);
  return (
    <div style={{padding:'30px', backgroundColor:'black', color:'white'}}>
        <h1>Life Cycle Of React</h1>
        <input type="text" value={name} placeholder='enter name' onChange={(event)=>{setname(event.target.value)}} />
        <h3>Name = {name}</h3>
        <h3>Count = {count}</h3>
        <button onClick={()=>setcount(count+1)}>Increase</button>
        <button onClick={()=>setcount(count-1)}>Decrease</button>
    </div>
  )
}

export default LifeCycle