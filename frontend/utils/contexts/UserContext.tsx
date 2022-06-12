import {createContext} from "react";
import {initialUserState, userActions} from "utils/reducers/UserReducer";


export const UserContext = createContext({
    userState: initialUserState,
    userDispatch: ({type, payload}: userActions) => {},
})

