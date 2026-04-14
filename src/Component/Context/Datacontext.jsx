import { createContext, useEffect, useState } from "react";
import React from 'react'

export const Mycontext = createContext()
export default function Datacontext({children}) {
    const [data,setdata]=useState([])

    useEffect(()=>{
        const loaddata = async ()=>{
            const res = await fetch("/friends.json")
            const data = await res.json()
            setdata(data)
        }
        loaddata()
    },[])
  return (
    <Mycontext.Provider value={{data,setdata}}>
        {children}
    </Mycontext.Provider>
  )
}



