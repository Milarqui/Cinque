import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {
    loginFunction,
    getUser,
    getToken
} from './loginSlice'
import { UserContext } from '../../context/UserContext';

export function Login(){
    const userLogged = useSelector(getUser)
    const tokenLogged = useSelector(getToken)
    const [user, setUser] = useState("");
    const [password,setPassword] = useState("")
    const history = useHistory()
    const [error,setError] = useState()
    const dispatch = useDispatch()
    const {setUserData} = useContext(UserContext)

    const loginGo = ()=>{
        dispatch(loginFunction({user,password}))
        setUserData({
            token: tokenLogged,
            user: userLogged
        })
        history.push("/main")
    }

    return(
        <div>
            <div>
                <label>Usuario</label>
                <input onChange={(e)=>{setUser(e.target.value)}}/>
            </div>
            <div>
                <label>Contraseña</label>
                <input onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button onClick={loginGo}>Enviar</button>
        </div>
    )

}