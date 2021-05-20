import { combineReducers } from "redux";
import about from './reducers/aboutReducer'
import home from './reducers/homeReducer'
import login from './reducers/loginReducer'



export default combineReducers({
    about,
    home,
    login
})
