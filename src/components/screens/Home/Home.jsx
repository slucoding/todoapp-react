import React from 'react'
import { TodoItem } from './item/TodoItem.jsx'

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
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
      { todos.map( todo => ( 
        <TodoItem key={todo.id} todo={ todo } />
       ))}
    </div>
  )
}

export default Home