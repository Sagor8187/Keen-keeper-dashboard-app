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

  return (
    <Mycontext.Provider value={{ data, setdata,handlehistory,history }}>
      {loading ? <Loading></Loading> : children}
    </Mycontext.Provider>
  );
}
