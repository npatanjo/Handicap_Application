import {createContext, Reducer, useReducer} from "react";
import searchReducer, { searchState, searchActions, initialSearchState } from "utils/reducers/SearchReducer";


interface SearchContextProps {
    state: searchState;
    dispatch: React.Dispatch<searchActions>;
}
export const SearchQueryContext = createContext({
    state: initialSearchState,
    dispatch: (arg: searchActions) => {}
})

//export const SearchQueryContext = createContext({
//    query: "",
//    setQuery: (text: string) => {},
//});
//export const SearchResultContext = createContext({
//    result: '',
//    setResult: (result: string) => {}
//});


