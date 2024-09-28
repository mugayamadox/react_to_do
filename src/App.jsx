import { newToDo } from "./todoForm"
import { useState } from "react"
import { todoList } from "./todoList"
import "./styles.css"

export default function App(){
  const [todos, setTodos] = useState([])

  function addToDo(title){
    setTodos( currentTodos =>{
      return [
      ...currentTodos, { id: crypto.randomUUID, title, completed:false },
     ]})
   
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id=== id){
            return {...todo, completed}
        }
        return todo
      })
    })
  }
  
  function deleteTodo(id){
    setTodos( currentTodos =>{
      return currentTodos.filter(todo=>todo.id !== id)
    })
  }
  
  return  <>
          <newToDo onSubmit={addToDo}/>
          <hi className="header">To Do List</hi>
          <todoList todos={todos} toggleTodo={toggleTodo} deleteTodo ={deleteTodo} />
          </>
}