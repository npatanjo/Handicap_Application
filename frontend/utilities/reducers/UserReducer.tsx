
// the possible states for the user type
export type userState = {
    username: string,
    password: string,
    gender: 'M' | 'F' | '',
    token: string
}

// the initial state for a user
export const initialUserState: userState = {
    username: '',
    password: '',
    gender: '',
    token: '',
}

// type is the field to update
// payload is the new value
type userActions = 
      {type: 'setInitial', payload: userState} 
    | {type: 'setUsername', payload: string} 
    | {type: 'setPassword', payload: string} 
    | {type: 'setGender', payload: string} 
    | {type: 'setToken', payload: string};
    
// Helper function to show the user which fields are not filled in
const getUnsetStates = (checkState: userState) : string[] => {
    let unsetStates  : string[] = [];
    Object.entries(checkState).forEach(([key, value]) => {
        if ("" === value) {
            unsetStates.push(key.toString());
        }
    })
    return unsetStates;
}


const userReducer = (state: userState = initialUserState, action: userActions) => {
    switch (action.type) {
        case 'setInitial': 
            return {...state, initialUserState}
        case 'setUsername':
            return {...state, username: action.payload};
        case 'setPassword':
            return {...state, password: action.payload};
        case 'setGender':
            return {...state, gender: action.payload};
        case 'setToken':
            return {...state, token: action.payload};
        default:
            const unsetStates = getUnsetStates(state);
            console.log(`Please fill in the following fields: ${unsetStates.join(', ')}.`)
            return state;
    }
}




export default userReducer;




