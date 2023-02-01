import React from 'react'
import { TodoItem } from './TodoItem.jsx'

const todos = [
  {
    id: 1, 
    title: 'Finish the assay collaboration',
    isCompleted: false,
  },
  {
    id:2,
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    id:3,
    title: 'Send the finished assignment',
    isCompleted: false,
  },
]

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>
      { todos.map( todo => ( 
        <TodoItem key={todo.id} todo={ todo } />
       ))}
    </div>
  )
}

export default Home