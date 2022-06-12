import axios from "axios";
import apiConfig from 'utils/API';
import {User} from "utils/interfaces/User";

/**
 * @async
 * Checks if the token is valid by requesting to the server.
 *
 * @param {string} token - string of the token, that the user has.
 *
 * @returns {Promise<boolean>} true if the token is validated from the server
 */
export async function checkUser(username: string, password: string) : Promise<boolean> {
    const response = await apiConfig.post('/auth/login', {
        username: username,
        password: password
    });
    return response.data.status === 'SUCCESS' ? true : false;
}



/**
 * @async
 * Checks if the user values (for creating a new account) are valid.
 * If true, the user is created and can therefore login.
 *
 * @param {User} user - the user object, containing {username, password, token, gender}
 *
 * @returns {Promise<boolean>} true if the username is availible and the 
 *                             server connected, to store the data
 */
export async function createUser(user: User) : Promise<boolean> {
    const response = await apiConfig.post('/auth/create', {
        username: user.username,
        password: user.password,
        token: user.token,
        gender: user.gender
    });
    return response.data.status === 'SUCCESS' ? true : false;
}


