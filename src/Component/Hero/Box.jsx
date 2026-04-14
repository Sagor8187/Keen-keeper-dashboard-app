import React, { useContext } from 'react'
import { Mycontext } from '../Context/Datacontext'

export default function Box() {
    const {data}= useContext(Mycontext)
    
    const upcoming = data.filter(item=> item.status ==="upcoming")
    const success = data.filter(item=> item.status ==="Success")
    const overdue = data.filter(item=> item.status ==="overdue") 
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mx-10 my-10'>
      <div className='shadow p-5 text-center'>
        <h1 className='text-2xl font-bold'>{data.length}</h1>
        <p>Total Friends</p>
      </div>
      <div className='shadow p-5 text-center'>
        <h1  className='text-2xl font-bold'>{upcoming.length}</h1>
        <p>Upcoming</p>
      </div>
      <div className='shadow p-5 text-center'>
        <h1  className='text-2xl font-bold'>{success.length}</h1>
        <p>Success</p>
      </div>
      <div className='shadow p-5 text-center'>
        <h1  className='text-2xl font-bold'>{overdue.length}</h1>
        <p>Overdue</p>
      </div>
    </div>
  )
}
