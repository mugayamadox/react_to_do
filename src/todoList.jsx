import { itemList } from "./itemList"
export function todoList( {todos, toggleTodo, deleteTodo}){
    return (
        <ul className="list">
            {todos.length === 0 && "No todos"}
            {todos.map(todo =>{
              return (
                  <itemList id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo ={deleteTodo}/>

              )
            })}
       
          </ul>
    )
}