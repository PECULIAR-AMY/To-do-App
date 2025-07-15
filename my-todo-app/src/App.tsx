import { useState } from "react";
import Todo from "./components/TodoList"

type Todos = {
  id: number,
  text: string,
  completed: boolean 

}


function App() {
const [input, setInput] = useState<string>("")
const [todos, setTodos] = useState<Todos[]>([]);

const AddTodo =() => {
 if (!input.trim()) return;
 const newTodo = {
  id: Date.now(),
  text: input,
  completed: false
 }
 setTodos ((prevTodos)=> [...prevTodos, newTodo]);
  setInput("")
} 
 
const CompleteTodo = (id: number) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
}

const deleteTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
}


  return (
    <div className="bg-blue-900 p-2 min-h-screen flex justify-center items-center ">
    <div className="max-w-[500] w-[90] bg-blue-950 p-4 rounded-md shadow-md ">
      <h1 className="text-center text-white text-2xl">My Todo</h1>
      <div className="flex gap-2 my-8 justify-center">
        <input className="flex-[3] border-2 outline-none border-gray-700 text-white placeholder:gray-500 p-2 rounded-md focus:border-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add Todo" />
        <button
        onClick={AddTodo}
        className="flex-1 bg-blue-300 rounded-md p-2 cursor-pointer text-2xl text-white">Add Todo</button>
        </div>
        <div>
          <h1 className="text-center text-white text-2xl">Todos</h1>
          {todos.length === 0 ? (
            <p className="text-center text-white text-2xl">No todos</p>
          ) : (
            <>
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} completeTodo={CompleteTodo} deleteTodo={deleteTodo}/>
              ))}
            </>
          )}
        </div>
        <div>
        </div>
    </div>
    </div>
  )
}

export default App
