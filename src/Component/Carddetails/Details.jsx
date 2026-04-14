import React, { useContext } from "react";
import { useParams } from "react-router";
import { Mycontext } from "../Context/Datacontext";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";
import { BsClockHistory, BsArchive } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Details() {
  const { data ,handlehistory} = useContext(Mycontext);
  const { id } = useParams();

  const info = data?.find((item) => item.id == id);

  
  if (!info) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }
const today = new Date();
const currnet = today.toDateString()
  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Left Card */}
      <div className="space-y-5">
        <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
          <img
            src={info?.picture}
            alt={info?.name}
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />

          <h2 className="text-xl font-semibold">{info?.name}</h2>

          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            {info?.status}
          </span>

          <div className="mt-2 flex justify-center gap-2">
             <div className='flex  justify-center gap-2' >
            {info.tags.map(item=><p className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">{item}</p>)}
          </div>
          </div>

          <p className="mt-3 text-gray-600 italic">"{info?.bio}"</p>
          <p className="text-sm text-gray-500">
            Preferred: {info?.email}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full bg-gray-100 p-3 rounded-lg shadow flex items-center justify-center gap-2">
            <BsClockHistory /> Snooze 2 Weeks
          </button>

          <button className="w-full bg-gray-100 p-3 rounded-lg shadow flex items-center justify-center gap-2">
            <BsArchive /> Archive
          </button>

          <button className="w-full bg-red-100 text-red-600 p-3 rounded-lg shadow flex items-center justify-center gap-2">
            <MdDelete /> Delete
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 space-y-4">
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
            <h1 className="text-2xl font-bold">
              {info?.days_since_contact}
            </h1>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
            <h1 className="text-2xl font-bold">{info?.goal}</h1>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-center shadow">
            <h1 className="text-sm font-bold">
              {info?.next_due_date
                ? new Date(info.next_due_date).toDateString()
                : "N/A"}
            </h1>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        {/* Goal */}
        <div className="bg-gray-100 p-5 rounded-xl shadow flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Relationship Goal</h2>
            <p className="text-gray-600">
              Connect every{" "}
              <span className="font-bold">{info?.goal} days</span>
            </p>
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">
            Edit
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button onClick={()=>handlehistory({...info,calling:"audio",date:currnet})} className="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center gap-2">
            <FaPhoneAlt /> Call
          </button>

          <button onClick={()=>handlehistory({...info,calling:"text",date:currnet})} className="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center gap-2">
            <FaCommentDots /> Text
          </button>

          <button onClick={()=>handlehistory({...info,calling:"video",date:currnet})} className="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center gap-2">
            <FaVideo /> Video
          </button>
        </div>
      </div>
    </div>
  );
}