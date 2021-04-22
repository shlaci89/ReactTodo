import React, {Fragment,useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";
import TodoItem from "../../components/todo/TodoItem"


const Todos = () => {
    const todoContext = useContext(TodoContext);
    const {todos}  = todoContext;
    
    return (
        <Fragment>
        <ul className="list-group">
        
           {todos && todos.map(todo =>(
               <TodoItem key={todo.id} todoitem={todo}/>
           ))} 
        </ul>
        </Fragment>
    )
}

export default Todos;
