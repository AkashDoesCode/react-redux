import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./userTypes"



const initialstate={
    loading: false,
    users: [],
    error : ''
}

const icecreamReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
            case FETCH_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    error:''
                }
                case FETCH_FAILURE:
                    return {
                        loading: false,
                        users : [],
                        error : ''
                    }
        default: return state
    }
}
export default icecreamReducer