import { createStore } from "redux";
import rootReducer from "./reducers";

export default function configureStore(initialState){
    return createStore(rootReducer, initialState);
}

//esto es lo unico que va a tener nuestro configureStore