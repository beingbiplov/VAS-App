
export const getVasUsername = (): any =>{
    const username = localStorage.getItem('vasUsername')
    if (username){
        return {username:username, isLoggedIn: true}
    }
    return {username:"", isLoggedIn: false}
}

export const setVasUsername = (username:string): boolean =>{
    localStorage.setItem('vasUsername', username)
    return true
}

export const removeVasUsername = (): boolean =>{
    localStorage.removeItem('vasUsername')
    return true
}