
// the possible states for the user type
export type authState = {
    isLoading: boolean,
    isLoggedIn: boolean,
    isRequesting: boolean,
    isCorrectInfo: boolean,
}

// the initial state for a user
export const initialAuthState: authState = {
    isLoading: true,
    isLoggedIn: false,
    isRequesting: true,
    isCorrectInfo: false
};

// type is the field to update
// payload is the new value
export type authAction = 
      {type: 'LOADING', payload: boolean} 
    | {type: 'LOGGED_IN', payload: boolean} 
    | {type: 'REQUESTING', payload: boolean} 
    | {type: 'CORRECT_INFO', payload: boolean};
    

const authReducer = (state: authState = initialAuthState, action: authAction) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, isLoading: action.payload};
        case 'LOGGED_IN':
            return {...state, isLoggedIn: action.payload};
        case 'REQUESTING':
            return {...state, isRequesting: action.payload};
        case 'CORRECT_INFO':
            return {...state, isCorrectInfo: action.payload};
        default:
            console.log("default case in authReducer");
            console.log(`authReducer got: ${ action }`)
            return initialAuthState;
    }
}


export default authReducer;
