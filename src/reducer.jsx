const count = 0;

function reducer(state = count, action) {

    const { type, payload } = action;

    switch (type) {

        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        case "INCREMENT_BY":
            return state + payload;

        case "DECREMENT_BY":
            return state - payload;

        default:
            return state;
    }
}

export default reducer;