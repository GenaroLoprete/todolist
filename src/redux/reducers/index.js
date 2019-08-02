import { combineReducers } from "redux";
import tasks from './taskReducer'
//raiz de la carpeta reducers
const rootReducer = combineReducers({
    tasks
});

export default rootReducer;

//combinacion de todos los reducers
