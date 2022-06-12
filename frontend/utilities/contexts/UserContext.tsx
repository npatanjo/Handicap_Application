import {createContext} from "react";
import {initialUserState, userActions} from "utilities/reducers/UserReducer";


export const UserContext = createContext({
    userState: initialUserState,
    userDispatch: ({type, payload}: userActions) => {},
})

