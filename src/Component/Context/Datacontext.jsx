import { createContext, useEffect, useState } from "react";
import React from "react";
import Loading from "../Loading/Loading";


export const Mycontext = createContext();
export default function Datacontext({ children }) {
  const [data, setdata] = useState([]);

  const [loading, setloading] = useState(true);

  const [history, sethistory] = useState([]);

 

  

//   api call load data
  useEffect(() => {
    const loaddata = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setdata(data);
      setloading(false);
    };
    loaddata();
  }, []);

// history function

const handlehistory = (information)=>{
    sethistory([...history,information])

}

// select value peak 

const [filters,setfilter] = useState([])

useEffect(() => {
  setfilter(history);
}, [history]);

const handleOnchange =(e)=>{
    const value = e.target.value
   
   if (value === "audio") {
    const justaudio = history.filter(item => item.calling == "audio");
    setfilter(justaudio);
  } 
  else if (value === "video") {
    const justvideo = history.filter(item => item.calling == "video");
    setfilter(justvideo);
  } 
  else if (value === "text") {
    const justtext = history.filter(item => item.calling == "text");
    setfilter(justtext);
  }else {
    setfilter(history);
  }
  
}
  return (
    <Mycontext.Provider value={{ data, setdata,handlehistory,history ,handleOnchange,filters}}>
      {loading ? <Loading></Loading> : children}
    </Mycontext.Provider>
  );
}
