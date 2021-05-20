// import * as types from '../actions/actionType';

export default (state = {}, action: any)=> {
    let aboutTodoList:any[] = action.data || [];
    // const newState =  Object.assign({}, state);
    let emptyList = {
        aboutTodoList:[]
    };
    switch (action.type) {
        case "ABOUTLOADDATA":
            return {
                ...state, ...action, aboutTodoList
            };
        case "ABOUTLISTSHOW":
            console.log('about reducer');
            return {
                ...state, ...action, aboutTodoList
            };
        case "ABOUTCLEARDATA":

            return {
                ...state, ...action, ...emptyList
            };
        default: return {
            ...state, ...action, ...emptyList
        }
    }

}
