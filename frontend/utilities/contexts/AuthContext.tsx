
import {createContext} from "react";
import {initialAuthState, authAction, authState} from "utilities/reducers/AuthReducer";

export const AuthContext = createContext({
    state: initialAuthState as authState,
    dispatch: ({type: authState, action: authAction}: authAction) => {}
})
