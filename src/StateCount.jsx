import { useState } from "react"

function StateCount()
{

    const[count,setCount] = useState(0);
    return(
        <div>

            <h1>Count = {count}</h1>
            <button onClick = {()=>setCount(count+1)}>Increment </button>
            &nbsp; &nbsp;
            <button onClick = {()=>count>1 && setCount(count-1)}>decrement </button>
            &nbsp; &nbsp;
            

        </div>

    )
}

export default StateCount