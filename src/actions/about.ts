import { actionType } from "./actionType"



export function loadData (text: string) {
    return {
        type: actionType.ABOUTLOADDATA,
        text,
    }
}

export function listAdd (text: string) {
    return {
        type: actionType.ABOUTLISTADD,
        text,
    }
}

export function listDel (text: string) {
    return {
        type: actionType.ABOUTLISTDEL,
        text,
    }
}

export function listShow (text: string) {
    return {
        type: actionType.ABOUTLISTSHOW,
        text,
    }
}
