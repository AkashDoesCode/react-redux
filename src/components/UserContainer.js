import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer({users,fetchUsers}) {
    useEffect(()=>{
        fetchUsers();
    },[])
  return (
    <div>
        <>
        <h1>
            List of users
        </h1>
        {
            users.loading?(
                <h3>loading</h3>
            ):users.error?(
                <h3>{users.error}</h3>
            ):(
                <div>
                    {
                       users && users.users && users.users.map(user=><li>{user.name}</li>)
                    }
                </div>
            )
        }
        </>  
    </div>
  )
}

const mapstatetoprops=state=>{
    return {
        users:state.users
    }
}

const mapdispatchtoprops=dispatch=>{
    return{
        fetchUsers : ()=>dispatch(fetchUsers())
    }
}


export default connect(mapstatetoprops,mapdispatchtoprops)(UserContainer)