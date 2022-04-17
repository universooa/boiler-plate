import axios from 'axios'

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataTosubmit){
    console.log("loginUser 함수시작")
 

   const request= axios.post('/api/users/login',dataTosubmit)
    .then(response=>
        response.data
    )

    return {
        type: LOGIN_USER,
        payload : request
    }
}

export function registerUser(dataTosubmit){
    console.log("loginUser 함수시작")
 

   const request= axios.post('/api/users/register',dataTosubmit)
    .then(response=>
        response.data
    )

    return {
        type: REGISTER_USER,
        payload : request
    }
}


export function auth(){
    console.log("loginUser 함수시작")
 

   const request= axios.get('/api/users/auth')
    .then(response=>
        response.data
    )

    return {
        type: AUTH_USER,
        payload : request
    }
}