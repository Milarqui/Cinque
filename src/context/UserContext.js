import React from 'react'
import {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext()

export function UserProvider(props){
    const [userData,setUserData] = useState({
        token:undefined,
        user:undefined
    })

    return(
        <UserContext.Provider value={{userData,setUserData}}>
            {props.children}
        </UserContext.Provider>
    )
}