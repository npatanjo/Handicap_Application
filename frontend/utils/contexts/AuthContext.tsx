
import {createContext} from "react";
import {initialAuthState, authAction, authState} from "utils/reducers/AuthReducer";

export const AuthContext = createContext({
    authState: initialAuthState as authState,
    authDispatch: ({type, payload}: authAction) => {}
})
