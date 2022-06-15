import {createContext} from "react";
import { searchState, searchAction, initialSearchState } from "utils/reducers/SearchReducer";


interface SearchContextProps {
    state: searchState;
    dispatch: React.Dispatch<searchAction>;
}
export const SearchQueryContext = createContext({
    searchState: initialSearchState,
    searchDispatch: ({type, payload}: searchAction) => {}
})
// export const SearchQueryContext = createContext({
//     state: initialSearchState,
//     dispatch: (arg: searchActions) => {}
// })
