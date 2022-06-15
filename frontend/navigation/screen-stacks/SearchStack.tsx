
import React, {useContext, useMemo, useReducer} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from 'screens/SearchScreen';
import CoursePage from 'screens/CoursePage';
import {InnerScreenOptions, MainScreenOptions} from "themes/HeaderBars";
import {SearchQueryContext} from "utils/contexts/SearchContext";
import searchReducer from "utils/reducers/SearchReducer";


const SearchScreenStack = createNativeStackNavigator();


export default function SearchStack() {
    const searchStates = useContext(SearchQueryContext);

    const [searchState, searchDispatch] = useReducer(searchReducer, searchStates as never);

    const contextValue = useMemo(() => ({searchState, searchDispatch}), [searchState, searchDispatch]);

    return (
        <SearchQueryContext.Provider value={contextValue}>
            <SearchScreenStack.Navigator initialRouteName={"SearchScreen"} screenOptions={MainScreenOptions} >
                <SearchScreenStack.Screen name="SearchScreen" component={SearchScreen} />
                <SearchScreenStack.Screen name="CoursePage" component={CoursePage} options={InnerScreenOptions} />
            </SearchScreenStack.Navigator>
        </SearchQueryContext.Provider>
    );
}


