import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import {
    makeFriends
} from './friendSlice'

export function MakeFriend(){
    const listFriends = useSelector(getLista)
    const [ID,setID] = useState()
    const [tipo,setTipo] = useState("id")
    const dispatch = useDispatch()
    
    const enviar = ()=>{
        dispatch(makeFriends({id:ID,tipo}))
    }

    return(
        <div>
            <label>Identificador</label>
            <input type="number" onChange={(e)=>setID(e.target.value)}/>
            <div>
                <input type="radio" id="id" name="tipo_identificador" onChange={()=>setTipo("id")}/><label htmlFor="id">ID</label><br/>
                <input type="radio" id="tlf" name="tipo_identificador" onChange={()=>setTipo("tlf")}/><label htmlFor="tlf">Teléfono</label>
            </div>
        </div>
    )
}