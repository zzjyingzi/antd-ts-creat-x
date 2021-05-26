// import * as types from '../actions/actionType';

export default (state = {userName:'', userId:null}, action: any)=> {
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
                ...state, ...action,
                user: {
                    userName: action.userName,
                    userId: action.userId
                }
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
