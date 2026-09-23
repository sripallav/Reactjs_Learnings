import React,{useContext, useState} from 'react'
import { createContext } from 'react'
const UserContext = createContext();
function Component1(){
    const [movie,setMovie]=useState("Paradise");
    return(
        <div>Component1
            <UserContext.Provider value={movie}>
                <h1>{'My Favourite movie is ${movie}'}</h1>
                <Component2/>
            </UserContext.Provider>
        </div>
    );
}
function Component2(){
    return(
        <>
        <h2>This is component 2</h2>
        <Component3></Component3>
        </>
    );
}
function Component3(){
    const movieContext{UserContext};
    return(
        <div><h2>This is component 3</h2>
        <h3>{'My Friend Favourite movie is also ${movie}'}</h3>
        </div>
    );
}
export default Component1