export function getToken(){
    return window.sessionStorage.getItem("token")
}
export function setToken(auth: any){
    const str = typeof auth === "string" ? auth : JSON.stringify(auth);
    return window.sessionStorage.setItem("token", str)
}
