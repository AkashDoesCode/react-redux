import { BUY_ICECREAM } from "./icecreamTypes"

const initialstate={
    numoficecream: 10
}
const icecreamReducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numoficecream: state.numoficecream-1
            }
        default: return state
    }
}
export default icecreamReducer