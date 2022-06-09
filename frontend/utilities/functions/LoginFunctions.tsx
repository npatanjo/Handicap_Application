import USERS from 'json/USERS.json';
import userState from 'types/User';

export async function getAllUsers() : Promise<userState[]> {
    let users: userState[] = [];
    try {
        USERS.forEach(user => {
            users.push(user);
        });
    } catch (e) {

    } finally {
        return users;
    }
}

export async function validUser(check: userState) : Promise<boolean> {
    let isValid: boolean = false;
    try {
        console.log("CHECK CALLED")
        console.log(`validUser(${ check })`);
        console.log();
        USERS.forEach((user: userState) => {
            if (user.token === check.token) {
                isValid = true;
            } else if (user.username === check.username && user.password === check.password) {
                isValid = true;
            }
        });
    } catch (e) {
        console.log(e);
    } 
    return isValid;
}

export function setUserLoggedIn(user: userState, dispatch: any) {
    dispatch({type: "setUsername", payload: user.username});
    dispatch({type: "setPassword", payload: user.password});
    dispatch({type: "setGender", payload: user.gender});
    dispatch({type: "setToken", payload: user.token})
    dispatch({type: "setIsLoggedIn", payload: true})
}


