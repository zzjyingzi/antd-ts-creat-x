// import * as types from '../actions/actionType';

export default (state = {}, action: any)=> {
    let todoList = action.data && action.data.length ? action.data : [];
    // const newState =  Object.assign({}, state);

    switch (action.type) {
        case "HOMELISTDEL":
            return {
                ...state, ...action, todoList
            };
        case "HOMELISTSHOW":
            return {
                ...state, ...action, todoList
            };
        case "HOMECLEARDATA":
            let emptyList = {
                todoList:[]
            };
            return {
                ...state, ...action, ...emptyList
            };
        default: return {
            ...state, ...action, todoList
        }
    }

}
