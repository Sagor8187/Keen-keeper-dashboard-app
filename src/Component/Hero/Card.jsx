import React, { useContext } from 'react'
import { Mycontext } from '../Context/Datacontext'
import { Link } from 'react-router'

export default function Card() {
    const {data} = useContext(Mycontext)
  return (
    <div className='mx-5 my-5'>
        <h1 className='text-2xl font-bold mx-5'>Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      
      {data.map((person) => (
        <Link to={`/details/${person.id}`}
          key={person.id}
          className="bg-gray-100 rounded-2xl shadow-md p-6 text-center"
        >
          {/* Image */}
          <img
            src={person.picture}
            alt={person.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold">{person.name}</h2>

          {/* Days */}
          <p className="text-gray-500 mb-3">
            {person.days_since_contact}d ago
          </p>

          {/* Tag */}
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
            {person.tags[0]}
          </span>

          {/* Status */}
          <div className="mt-4">
            <span
              className={`px-4 py-2 rounded-full text-white ${
                person.status === "overdue"
                  ? "bg-red-400"
                  : person.status === "upcoming"
                  ? "bg-yellow-400"
                  : "bg-green-400"
              }`}
            >
              {person.status}
            </span>
          </div>
        </Link>
      ))}

    </div>
    </div>
  )
}
