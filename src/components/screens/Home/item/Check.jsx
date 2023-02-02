import React from 'react'
import {BsCheck} from 'react-icons/bs'

export const Check = ({ isCompleted }) => {
  return (
    <div className='border-2 rounded-md border-pink-400 w-5 h-5 mr-2'>
      {
        isCompleted && <BsCheck size={24} className='text-gray-900' />
      }       
    </div>
  )
}
