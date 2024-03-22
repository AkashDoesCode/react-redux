import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
  return (
   <>
   <h1>cake no : {props.numofcakes}</h1>
   <button onClick={props.buyCake} >Buy Cake</button>
   </>
  )
}


const mapstatetoprops=state=>{
    return {
        numofcakes: state.cake.numofcakes
    }
}

const mapdispatchtoprops=dispatch=>{
    return{
        buyCake : ()=>dispatch(buyCake())
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(CakeContainer)