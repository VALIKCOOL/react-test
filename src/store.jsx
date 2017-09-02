import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";

let middlewares = [];

const composeEnhancers = composeWithDevTools({
    name: "react-test"
});

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares),
));

export { store };
