import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { Mycontext } from '../Context/Datacontext';
export default function Banner() {
    const {data} = useContext(Mycontext)
    console.log(data)
  return (
    <div>
        <div className=" mt-20 bg-white flex flex-col items-center justify-center px-4 text-center">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6 tracking-tight">
        Friends to keep close in your life
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-[#64748b] max-w-3xl mb-10 font-normal">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Add Friend Button */}
      <button className="flex items-center justify-center gap-2 bg-[#214d3e] hover:bg-[#1a3d31] text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-md active:scale-95">
        <FaPlus className="text-sm" />
        <span className="text-base">Add a Friend</span>
      </button>
    </div>
    </div>
  )
}
