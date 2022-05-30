import {createContext, SetStateAction} from "react";


export const SearchQueryContext = createContext({
    query: '',
    setQuery: (query: string) => {}
});

//export const SearchResultContext = createContext({
//    result: '',
//    setResult: (result: string) => {}
//});


