import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {
    transferFunction,
    getUser
} from './transferSlice'
import { UserContext } from '../../context/UserContext';

export function Transfer(){
    const userData = useSelector(getUser)
    const [friendID, setFriendID] = useState("");
    const [cash,setCash] = useState(0)
    const history = useHistory()
    const [error,setError] = useState()
    const dispatch = useDispatch()
    const {setUserData} = useContext(UserContext)

    const sendMoney = ()=>{
        dispatch(transferFunction({receptor:friendID,cash}))
        setUserData({
            user: userData
        })
        history.push("/main")
    }

    return(
        <div>
            <div>
                <label>Receptor</label>
                <input onChange={(e)=>{setFriendID(e.target.value)}}/>
            </div>
            <div>
                <label>Cantidad</label>
                <input type="number" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button onClick={sendMoney}>Enviar</button>
        </div>
    )

}