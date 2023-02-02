import React from 'react'
import { Check } from './Check'

export const TodoItem = ({todo}) => {
  return (
    <button className='flex items-center rounded-2xl mb-4 bg-zinc-800 p-5 w-full'>
      <Check />
      { todo.title }
    </button>
  )
}
