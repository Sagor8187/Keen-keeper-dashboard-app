import React from 'react'
import { useParams } from 'react-router'

export default function Details({params}) {
    const {id} = useParams()
    console.log(id)
  return (
    <div>Details</div>
  )
}
