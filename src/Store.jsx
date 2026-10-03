// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";

// const store = configureStore({
//     reducer: reducer
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;

