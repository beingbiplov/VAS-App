
export const getVasUsernameLS = (): any =>{
    const username = localStorage.getItem('vasUsername')
    return username
}

export const setVasUsernameLS = (username:string): boolean =>{
    localStorage.setItem('vasUsername', username)
    return true
}

export const removeVasUsernameLS = (): boolean =>{
    localStorage.removeItem('vasUsername')
    return true
}