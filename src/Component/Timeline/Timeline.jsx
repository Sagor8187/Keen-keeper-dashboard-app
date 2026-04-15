import React, { useContext } from "react";
import { Mycontext } from "../Context/Datacontext";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";
import { BsClockHistory, BsArchive } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
export default function Timeline() {
  const { history,handleOnchange,filters } = useContext(Mycontext);
console.log(filters)
  return (
  <div>
      <h1 className="text-2xl font-bold mx-10 my-5">Timeline</h1>
  {filters.length === 0 ? (
    <p className="font-bold text-2xl flex justify-center items-center  mx-auto my-50">
      No History in Timeline
    </p>
  ) : (
    <div className="space-y-5">
    

      <div className="mx-10">
        <select defaultValue="all" onChange={handleOnchange} className="select">
          <option value="all">All</option>
          <option value="audio">Audio</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div>
        {filters.map((item,ind) => (
          <div key={ind} className="shadow rounded flex items-center gap-5 mx-10 p-6">
            <div className="text-2xl">
              {item.calling === "audio" ? (
                <FaPhoneAlt />
              ) : item.calling === "text" ? (
                <FaCommentDots />
              ) : item.calling === "video" ? (
                <FaVideo />
              ) : null}
            </div>

            <div>
              <p>
                <span className="font-bold ">Call With </span> {item.name}
              </p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  );
}
