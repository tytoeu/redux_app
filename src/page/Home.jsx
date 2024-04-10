import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUserData } from '../redux/action'

const Home = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.userData)

    const data = {
        id: 1,
        name: 'User name',
        token: 'ldfjaljfoagjoqwegjorgj'
    }

    const actionClick = ()=> {
        dispatch(getUserData(data))
        localStorage.setItem('data',JSON.stringify(data))
    }

    const clearData = ()=>{
        localStorage.removeItem('data');
    }

    return (
        <div>
            <p>Your data {userData?.token}</p>
            <button onClick={actionClick}>Get data</button>
            <button onClick={clearData}>clear data</button>
        </div>
    )
}

export default Home