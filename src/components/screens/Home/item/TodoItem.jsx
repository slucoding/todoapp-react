import React from 'react'
import { Check } from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

export const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className='flex items-center justify-between rounded-2xl mb-4 bg-zinc-800 p-5 w-full'>
      <button onClick={() => changeTodo(todo.id)} className='flex items-center' >
        <Check isCompleted={todo.isCompleted}/>
        <span
          className={cn({
            'line-through': todo.isCompleted,
          })}
        >
          { todo.title }
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash size={22} className='flex text-gray-600 hover:text-red-700' />
      </button>       
    </div>
  )
}