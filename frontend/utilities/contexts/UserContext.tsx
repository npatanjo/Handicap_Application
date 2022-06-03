import {createContext} from "react";
import {initialUserState, userActions} from "utilities/reducers/UserReducer";


export const UserContext = createContext({
    state: initialUserState,
    dispatch: (arg: userActions) => {},
})

