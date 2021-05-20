import { actionType } from "./actionType"



export function loadHomeData (text: string) {
    return {
        type: actionType.HOMELOADDATA,
        text,
    }
}

export function addOne (text: string) {
    return {
        type: actionType.HOMELISTADD,
        text,
    }
}

export function modifyById (text: string, id: number) {
    return {
        type: actionType.HOMELISTMODIFY,
        text,
        id
    }
}
export function findByName (text: string, name: string) {
    return {
        type: actionType.HOMELISTFIND,
        text,
        name
    }
}

export function deleteById (text: string, id: number) {
    return {
        type: actionType.HOMELISTDEL,
        text,
        id
    }
}

export function listShow (text: string) {
    return {
        type: actionType.HOMELISTSHOW,
        text,
    }
}

export function clearHomeData (text: string) {
    return {
        type: actionType.HOMECLEARDATA,
        text,
    }
}

