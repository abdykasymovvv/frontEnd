import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReduser} from "../reducers/authreducer";


let rootReducer = combineReducers({
    auth: authReduser,
    form: formReducer,
})
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;