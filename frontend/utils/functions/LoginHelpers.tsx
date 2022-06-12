/**
 * Helper functions to handle different login states of Auth Stack Screens, and initial rendering
 *
 * @functions:
 * -------------------------------------------------------------------------------------------
 *  - userHasEmptyFields()          - verifies all fields are non-empty for a User
 *  - @async isNewUser()            - verifies if there is userData stored locally
 *
 *  - @async handleSplashLogin()    - handles auth request for when the app is initially opened
 *  - @async handleCreateAccount()  - handles auth request for when a user create an account
 *  - @async handleLoginToAccount() - handles auth request for an existing member
 *
 *  - @async clearAllUserData()     - clears all user data from local storage
 *  - @async storeAllUserData()     - stores all user info in local storage
 */
import {User, UserKeys} from 'utils/interfaces/User';
import {checkUser, createUser} from 'functions/AuthHelpers';
import * as localStorage from 'functions/LocalStoreHelpers';


/**
 * Verifies all fields are non-empty for a User
 *
 * @param {User} user - user object with fields ['username', 'password', 'gender', 'token']
 *
 * @returns {boolean} true if any key has an empty value
 */
export function userHasEmptyFields(user: User) : boolean {
    
    UserKeys.forEach( key => {
        let curr = user[key];
        if (curr === null || curr === undefined || curr === '') {
            return true;
        }
    })
    return false;
}


/**
 * @async
 * Verifies if there is a userToken stored locally
 *
 * @returns {Promise<boolean>}  - true if ther is a
 */
export async function isNewUser() : Promise<boolean> {
    try {
        console.log("CHECK CALLED")
        // console.log(`validUser(${ check })`);
        console.log();
        let accountExists = await localStorage.hasItem("token");
        if (accountExists) {
            return false;
        }
    } catch (e) {
        console.log('isNewUser error: ', e);
    } finally { 
        return true;
    } 
}

/**
 * @async
 * handleSpashLogin - handles auth request for when the app is initially opened
 *
 * @returns {Promise<boolean>} - true if the user is logged in
 */
export async function handleSplashLogin() : Promise<boolean> {
    let validUser: boolean = false;
    try {
        const newUser = await isNewUser();
        let hasUsername = await localStorage.hasItem("username");
        let hasPassword = await localStorage.hasItem("password");
        if (!newUser || !hasUsername || !hasPassword) {
            return false;
        }  
        let username = await localStorage.getItem("username");
        let token = await localStorage.getItem("token");
        if (username && token) {
            validUser = await checkUser(username, token);
        }
    } catch (e) {
        console.log('handleSplashLogin error: ', e);
    }
    return validUser;

}


/**
 * @async
 * handleCreateAccount - handles auth request for when a user create an account
 *
 * @param {User} user - user object with fields ['username', 'password', 'gender', 'token']
 *
 * @returns {Promise<boolean>} true if account was created
 */
export async function handleCreateAccount(user: User) : Promise<boolean> {
    let validUser: boolean = false;
    try {
        if (userHasEmptyFields(user)) {
            return false;
        }
        validUser =  await createUser(user);
        if (validUser) {
            await clearAllUserData();
            await storeAllUserData(user);
        }
    }
    catch (e) {
        console.log('checkLogin error: ', e);
    } finally {
        return validUser;
    }
}

/**
 * @async
 * handleLoginToAccount - handles auth request for an existing member
 *
 * @param {User} user - user object with fields ['username', 'password', 'gender', 'token']
 *
 * @returns {Promise<boolean>} true if login was successful
 */
export async function handleLoginToAccount(user: User) : Promise<boolean> {
    let validUser: boolean = false;
    try {
        if (!user.username || !user.password) {
            return false;
        }
        //let name = await localStorage.getItem('username');
        //let password = await localStorage.getItem('password');
        //if (!name || !password) {
        //    return false;
        //}
        validUser =  await checkUser(user.username, user.password);
    }
    catch (e) {
        console.log('checkLogin error: ', e);
    } finally {
        return validUser;
    }
}

/**
 * @async
 * Stores every key {username, password, gender, token} locally
 *
 * @param {User} user - user object with NON-EMPTY keys
 *
 * @returns {Promise<void>} 
 */
export async function storeAllUserData(user: User) : Promise<void> {
    UserKeys.forEach( async key => {
        let didStore = localStorage.storeItem(key, user[key]);
        if (!didStore) {
            console.log(`Error storing user data for key: {${key}, value: ${user[key]}}`);
        }
    });
}


/**
 * @async
 * handleLogoutAuth() - clears all user data from local storage
 *
 * @returns {Promise<void>} 
 */
export async function handleLogoutAuth() : Promise<void> {
    try {
        await clearAllUserData();
    } catch (e) {
        console.log('handleLogoutAuth() error: ', e);
    }
}

/**
 * @async
 * clears any existing user data from local storage
 *
 * @returns {Promise<void>} 
 */
export async function clearAllUserData() : Promise<void> {
    UserKeys.forEach( async key => {
        let hasField = await localStorage.hasItem(key);
        if (hasField) {
            let didRemove = await localStorage.removeItem(key);
            if (!didRemove) {
                console.log(`Error removing user data for key: {${key}}`);
            }
        }
    });
}

/**
 * @async
 * construct user object from local storage
 *
 * @return {User} user object with NON-EMPTY keys
 */
export async function getUserFromLocalStorage() : Promise<User> {
    let localUser: User = {
        username: '',
        password: '',
        gender: 'M',
        token: '_'
    }
    try {
        UserKeys.forEach( async key => {
            let hasField = await localStorage.hasItem(key);
            if (!hasField) {
                throw new Error(`Error getting local user data for key: {${key}}`);
            }
        });

        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        let gender = localStorage.getItem('gender');
        let token = localStorage.getItem('token') ;
        localUser = {
            // @ts-ignore
            username: username,
            // @ts-ignore
            password: password,
            // @ts-ignore
            gender: gender,
            // @ts-ignore
            token: token,
        };
    } catch (e) {
        console.log(`[ ERROR ] getUserFromLocalStorage error: ${e}`)
    }
    finally {
        return localUser;
    }
}


///**
// * internal function that verifies if the token passed to this
// *
// * @async
// * @param {User} user - [TODO:description]
// * @returns {Promise<boolean>} [TODO:description]
// */
//async function checkLogin(token : string) : Promise<boolean> {
//    let validUser: boolean = false;
//    try {
//        if (userHasEmptyFields(user)) {
//            return false;
//        }
//        validUser =  await checkToken(user.token);
//    }
//    catch (e) {
//        console.log('checkLogin error: ', e);
//    }
//    return validUser;
//}
