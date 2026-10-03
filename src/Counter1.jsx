
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter1() {

    const count = useSelector(state => state);

    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);

    return (
        <div>

            <h1>Redux Counter</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>

            <br />
            <br />

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            <button
                onClick={() =>
                    dispatch({
                        type: "INCREMENT_BY",
                        payload: number
                    })
                }
            >
                Increment BY
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "DECREMENT_BY",
                        payload: number
                    })
                }
            >
                Decrement By
            </button>

        </div>
    );
}

export default Counter1;