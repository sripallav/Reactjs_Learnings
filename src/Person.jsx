const name = "Pallav"
const age = 22
function Person(props){
    
    return(
        <>
        <h1>Hello my name is {props.name}</h1>
        <p>I am {props.age} years old.</p>
        </>
    )
}

export default Person