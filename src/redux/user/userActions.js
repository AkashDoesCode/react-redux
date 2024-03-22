import { FETCH_LOADING } from "./userTypes"
import { FETCH_SUCCESS } from "./userTypes"
import { FETCH_FAILURE } from "./userTypes"
import axios from "axios"

export const loading=()=>{
    return {
        type: FETCH_LOADING
    }
}
export const success=(users)=>{
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}
export const failure=(error)=>{
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users').
        then(response=>{
            const users=response.data;
            dispatch(success(users))
        })
        .catch(err=>{
            const errmsg=err.message;
            dispatch(failure(errmsg))
        })
    }
}