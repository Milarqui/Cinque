import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {
    createUserFunction
} from './createUserSlice'

export function CreateUser(){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState();
    const [email, setEmail] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [password1,setPassword1] = useState("")
    const [password2,setPassword2] = useState("")
    const history = useHistory()
    const [error,setError] = useState()
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <label>Nombre</label>
                <input onChange={(e)=>{setNombre(e.target.value)}}/>
            </div>
            <div>
                <label>Apellidos</label>
                <input onChange={(e)=>{setApellido(e.target.value)}}/>
            </div>
            <div>
                <label>Teléfono</label>
                <input type="number" onChange={(e)=>{setTelefono(e.target.value)}}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label>Fecha de nacimiento</label>
                <input type="date" onChange={(e)=>{setNombre(e.target.value)}}/>
            </div>
            <div>
                <label>Contraseña</label>
                <input onChange={(e)=>{setPassword1(e.target.value)}}/>
            </div>
            <div>
                <label>Repetir contraseña</label>
                <input onChange={(e)=>{setPassword2(e.target.value)}}/>
            </div>
            <button onClick={()=>dispatch(loginFunction)}>Enviar</button>
        </div>
    )

}