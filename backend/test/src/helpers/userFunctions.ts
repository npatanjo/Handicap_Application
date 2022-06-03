
import { User } from './interfaces';
//import ALL_USERS from 'testJson/ALL_USERS.json';
import USERS from '../json/ALL_USERS.json';

//const createUser = (username="", password="", gender='male', token=""): User => {
//  return {
//        username: username, 
//        password: password,
//        gender: gender,
//        token: token ,
//  };
//}

export default function getValidUser(name: string) : User {
    let retUser : User = {
        username: "",
        password: "",
        gender: "",
        token: ""
    };
    
    USERS.USERS.forEach(( user : User ) => {
        if (user.username === name) {
            retUser = user;
        }
    });
    return retUser;
}


//const getAllUsers = () : User[] => {
//    let users : User[] = [];
//    USERS.array.forEach(( user : User ) => {
//        users.push(user);
//    });
//    return users;
//}

//const sameUsers = (user1: User, user2: User) => {
//    return (user1.username === user2.username &&
//        user1.password === user2.password &&
//        user1.gender === user2.gender &&
//        user1.token === user2.token);
//}

//module.exports = {
//    createUser,
//    getValidUser,
//    getAllUsers,
//}
