import {emptyGolfCourse, GolfCourse} from "utils/GolfCourse";

// the possible states for the user type
export type searchState = {
    query: string,
    filter: string[],
    results: GolfCourse[],
    selected: GolfCourse,
    focused: boolean,
    loading: boolean
}


// the initial state for a user
export const initialSearchState: searchState = {
    query: "",
    filter: [] as string[],
    results: [] as GolfCourse[],
    selected: emptyGolfCourse,
    focused: false,
    loading: false,
}

// type is the field to update
// payload is the new value
export type searchAction = 
      {type: 'setInitial', payload: searchState}
    | {type: 'setQuery', payload: string} 
    | {type: 'setFilter', payload: string[]}
    | {type: 'setResults', payload: GolfCourse[]}
    | {type: 'setNewSelection', payload: GolfCourse}
    | {type: 'setClearSelection', payload: any}
    | {type: 'setFocused', payload: boolean} 
    | {type: 'setLoading', payload: boolean};
    

const searchReducer = (state: searchState = initialSearchState, action: searchAction) => {
    switch (action.type) {
        case 'setInitial': 
            return {...state, initialSearchState}
        case 'setQuery':
            return {...state, query: action.payload};
        case 'setFilter':
            return {...state, filter: action.payload};
        case 'setResults':
            return {...state, results: action.payload};
        case 'setNewSelection':
            return {...state, selected: action.payload};
        case 'setClearSelection':
            return {...state, selected: emptyGolfCourse};
        case 'setFocused':
            return {...state, focused: action.payload};
        case 'setLoading':
            return {...state, gender: action.payload};
        default:
            console.log(`ERROR: searchReducer() got unknown action ${action}`);
            return {...state, initialSearchState};
    }
}




export default searchReducer;




