import { actionType } from "./actionType"



export function login (text: string, params: any) {
    return {
        type: actionType.LOGIN,
        text,
        ...params
    }
}
export function loginSuc(text: string, params:any) {
    return {
        type: actionType.LOGINSUC,
        text,
        ...params
    }
}

export function logout (text: string, params:any) {
    return {
        type: actionType.LOGOUT,
        text,
        ...params
    }
}


export function saveState (text: string) {
    return {
        type: actionType.SAVESTATE,
        text,
    }
}

