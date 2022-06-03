import { User } from 'testHelpers/interfaces';

/**
 *
 * Some problems I ran into:
 *   • importing JSON files
 *   • for some reason importing multiple functions per file causes errors?
 *
 * After above bugs are fixed:
 *   • add importing source/controllers/*
 *
 * Possible Fix to issues:
 *   • move directory ./src/tests to source/tests
 *      I have hw so I'm giving up for rn, but this is probably a more correct 
 *      way to have the test suite set up.
 *   • ^^ that method is how you would do it in JAVA ^^
 *   • Also maybe remove the jest.config.ts file and redo cmd:
 *
 *     $ jest --init
 *
 *  TO RUN TESTS: 
 *
 *     $ yarn test
 *
 * ┌───────────────────────────┐ 
 * │ DO NOT PULL INTO BACKEND  │
 * └───────────────────────────┘
 *  
 */

// json for tests since import isn't working
const USERS = [
    {
        "username": "nick",
        "password": "gnu",
        "gender": "male",
        "token": "testToken1"
    },
    {
        "username": "susie",
        "password": "gnu",
        "gender": "female",
        "token": "testToken2"
    }
 ]
 

// getValidUser - returns a user for the tests
function getValidUser(name: string){
    let retUser : User = {
        username: "",
        password: "",
        gender: "",
        token: ""
    };
    
    USERS.forEach(( user : User ) => {
        if (user.username === name) {
            retUser = user;
        }
    });
    return retUser;

}


// checks user nick exists
test('[TEST] GET_USER 1', () => {
    const nick : User = getValidUser('nick');
    expect(nick).toEqual({
        username: 'nick',
        password: 'gnu',
        gender: 'male',
        token: 'testToken1',
    });
})

// checks user susie exists
test('[TEST] GET_USER 2', () => {
   const susie : User = getValidUser('susie');
   expect(susie).toEqual({
       username: 'susie',
       password: 'gnu',
       gender: 'female',
       token: 'testToken2',
   });
})
