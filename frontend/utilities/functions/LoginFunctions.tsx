
import USERS from 'json/USERS.json';
import UserState from 'types/User';






export async function getAllUsers() : Promise<UserState[]> {
    let users: UserState[] = [];
    try {
        USERS.forEach(user => {
            users.push(user);
        });
    } catch (e) {

    } finally {
        return users;
    }
}

export async function validUser(check: UserState) : Promise<boolean> {
    let isValid: boolean = false;
    try {
        console.log("CHECK CALLED")
        console.log(`validUser(${ check })`);
        console.log();
        USERS.forEach((user: UserState) => {
            if (user.token === check.token) {
                isValid = true;
            } else if (user.username === check.username && user.password === check.password) {
                isValid = true;
            }
        });
    } catch (e) {
        console.log(e);
    } finally {
        return isValid;
    }
}

export function setUserStates(user: UserState, dispatch: any) {
    dispatch({type: "setUsername", payload: user.username});
    dispatch({type: "setPassword", payload: user.password});
    dispatch({type: "setGender", payload: user.gender});
    dispatch({type: "setToken", payload: user.token})
}


