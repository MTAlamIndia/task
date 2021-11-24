import ToDoReducer from "./ToDoReducer";
import UserNameReducer from "./UserNameReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    UserNameReducer,
    ToDoReducer
})

export default rootReducer;