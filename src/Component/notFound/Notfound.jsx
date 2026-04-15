import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Notfound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      
      {/* Big Error Code */}
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-3">
        Page Not Found
      </h2>

      {/* Dynamic URL show */}
      <p className="text-gray-500 mt-2">
        No page found for:{" "}
        <span className="text-black font-mono">
          {location.pathname}
        </span>
      </p>

      {/* Suggestion */}
      <p className="text-gray-400 mt-2 max-w-md">
        The link you clicked may be broken or the page may have been removed.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Home
        </button>

      </div>
    </div>
  );
}