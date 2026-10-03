// import Task1 from "./Task1";

// function App() {

//     return (
//         <Task1 />
//     );
// }

// export default App;

// import Counter from "./Counter";

// function App() {

//     return (
//         <Counter />
//     );
// }



// import Store from "./Store";

// function App() {

//     return (
//         <Store />
//     );
// }

// export default Store;


import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Counters1 from "./Counters1";

function App() {
    return (
        <Provider store={store}>
            <Counters1 />
        </Provider>
    );
}

export default App;







