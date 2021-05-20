// import * as types from '../actions/actionType';

import {setToken} from "../util/manageStorage";


export default (state = {changeLonginStatus: ()=>{}}, action: any)=> {
    let user = action.user || {};
    // const newState =  Object.assign({}, state);
    let userClean = {};
    switch (action.type) {
        case "LOGIN":
            return {
                ...state, ...action, user
            };
        case "LOGINSUC":
            return {
                ...state, ...action
            };
        case "LOGOUT":
            return {
                ...state, ...action, user
            };
        case "SAVESTATE":
            return {
                ...state, ...action, user
            };
        default: return {
            ...state, ...action, user: userClean
        }
    }
}
