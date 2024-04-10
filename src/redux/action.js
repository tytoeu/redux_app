import { GET_USER } from "./type";

export const getUserData = (data)=>{
    return {
        type: GET_USER,
        payload: data,
        isLoading: true
    }
}