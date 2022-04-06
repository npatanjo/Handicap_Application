import {SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, 
SET_AUTHENTICATED, LOADING_USER, SET_UNAUTHENTICATED} from '../types'

import axios from "axios";

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })

    axios.post("login", userData).then((res) =>{
        const token = 'Bearer ${res.data.token}';
        localStorage.setItem('token', 'Bearer ${res.data.token}') // set the token to local storage
        axios.defauts.headers.common['Authorization'] = token; // set authorize token to axios header
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        console.log("Setting token was succesfull!!")
        history.push('/'); //redirecting after success
    })
    .catch((err) => {
        console.log(err);
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
}

/*
fetching authenticated user information
*/

export const getUserData = () => (dispatch: any) => {
    dispatch({type: LOADING_USER});
    axios.get('/user').then(res => {
        console.log('user data', res.data);

        dispatch({
            type: SET_USER,
            payload: res.data
        });

    }).catch(err => {
        console.log(err);
    });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = '/login'; //redirect to login page @Nick
};