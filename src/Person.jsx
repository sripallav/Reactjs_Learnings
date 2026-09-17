const name = "Pallav";
const age = 22;
const car = "BMW";
const colour = "red";

function Person(props) {

    var p = {
        color: "yellow",
        border: "5px solid cyan"
    };

    return (
        <>
            {/* inline css */}
            <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
                Hello my name is {props.name}
            </h1>

            {/* internal css */}
            <p style={p}>
                My Favorite car is {props.car} and colour is {props.colour}
            </p>

            <p style={{
                backgroundColor: props.bgc,
                color: props.clr
            }}>
                I am Learning React
            </p>

            {/* ternary operator */}
            {age >= 18 ? "Adult" : "Minor"}
        </>
    );
}

export default Person;