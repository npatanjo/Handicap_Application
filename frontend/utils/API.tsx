import axios from 'axios';


const apiURL = 'https://golf-handicap-api-ts.herokuapp.com';


const apiConfig = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});


export default apiConfig;
