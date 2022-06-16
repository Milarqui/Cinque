import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import {
    friendListGet,
    getLista
} from './friendSlice'

export function FriendList(){
    const listFriends = useSelector(getLista)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(listFriends === []) dispatch(friendListGet)
    })

    return(
        <div>
            {listFriends && listFriends.map((friend)=>(
                <div>
                    <p>{friend.nombre}+{friend.apellido}</p>
                    <p>{friend.telefono}</p>
                </div>
            ))}
        </div>
    )
}