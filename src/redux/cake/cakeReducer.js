import { BUY_CAKE } from "./cakeTypes"

const initialstate={
    numofcakes: 10
}
const cakeReducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numofcakes: state.numofcakes-action.payload
            }
        default: return state
    }
}
export default cakeReducer