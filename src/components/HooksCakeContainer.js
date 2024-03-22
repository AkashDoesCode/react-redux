import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numofcakes=useSelector(state=>state.cake.numofcakes)
    const dispatch =useDispatch();
  return (
    <div>
        <h1>no of cakes - {numofcakes} </h1>
        <button onClick={()=>dispatch(buyCake(5))}>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
