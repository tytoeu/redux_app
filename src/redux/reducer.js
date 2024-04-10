import { GET_USER } from "./type";

const initialState = {
    data : null,
    isLoading: false
}

export default (state = initialState, {type,payload,isLoading})=>{

    switch(type){
        case GET_USER:
            return {...state,data:payload,isLoading:isLoading}
        default:
            return state
    }

}