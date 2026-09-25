import React, { useState } from 'react';

function AllEv() {

    const [name, setName] = useState("Likhitha");
    const [message, setMessage] = useState("");

    function handleChange(event) {
        setName(event.target.value);
        setMessage("Text Modified");
    }

    function handleFocus() {
        setMessage("Text box focused");
    }

    function handleBlur() {
        setMessage("Text box lost focus/blur");
    }

    function handleKeyDown() {
        setMessage("Key pressed down");
    }

    function handleClick() {
        setMessage("Button Clicked");
    }

    function handleDoubleClick() {
        setMessage("Button doubleClicked");
    }

    function handleMouseOver() {
        setMessage("Mouse Over");
    }

    function handleMouseOut() {
        setMessage("Mouse Out");
    }

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("Form submitted");
    }

    return (
        <div>

            <h2>AllEvents</h2>

            <input
                type="text"
                value={name}
                placeholder="Enter username"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleClick}>
                Click
            </button>

            <button onDoubleClick={handleDoubleClick}>
                Double Click
            </button>

            <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Mouse Over and Out
            </button>

            <form onSubmit={handleSubmit}>
                <button type="submit">
                    Submit Form
                </button>
            </form>

            <h2>{message}</h2>

        </div>
    );
}

export default AllEv;