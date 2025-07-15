import React from 'react'
import { FaCheckCircle, FaTrash } from "react-icons/fa";
type Todoprops = {
  readonly todo: {
    readonly id: number,
    readonly text: string,
    readonly completed: boolean
  };
  readonly completeTodo: (id: number) => void

  readonly deleteTodo: (id:number) => void 
}

function Todo({todo, completeTodo , deleteTodo}: Todoprops) {
  return (
   <div className="bg-blue-300 p-2 rounded-md flex justify-between items-center my-4 text-white">
            <p className={`${todo.completed === true ? "blur-sm" : ""}`}>{todo.text}</p>
            <div className="flex gap-2 items-center cursor-pointer">
              <FaCheckCircle
                className="hover:text-gray-200"
                onClick={() => completeTodo(todo.id)}
              />
              <FaTrash 
                className="hover:text-gray-500"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
  )
}

export default Todo
