import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    increment,
    decrement,
    incrementBy,
    decrementBy
} from "./CounterSlice";

function Counters1() {

    const count = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);

    return (
        <div>

            <h1>Redux Counter</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>

            <br />
            <br />

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            <button onClick={() => dispatch(incrementBy(number))}>
                Increment By
            </button>

            <button onClick={() => dispatch(decrementBy(number))}>
                Decrement By
            </button>

        </div>
    );
}

export default Counters1;