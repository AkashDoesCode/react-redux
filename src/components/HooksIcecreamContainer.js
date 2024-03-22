import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { buyIcecream } from '../redux/icecream/icecreamActions';

function HooksIcecreamContainer() {
    const numoficecream=useSelector(state=>state.icecream.numoficecream)
    const dispatch =useDispatch();
  return (
    <div>
        <h1>no of icecream - {numoficecream} </h1>
        <button onClick={()=>dispatch(buyIcecream())}>buy cake</button>
    </div>
  )
}

export default HooksIcecreamContainer