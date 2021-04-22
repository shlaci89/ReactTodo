import React, { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {

    const initialState = {
        todos: [
          {
            id: "1",
            todo: "Todo 1", 
          },
          {
            id: "2",
            todo: "Todo 2",
          },
        ]
      };

    const state = initialState;

    return(
        <TodoContext.Provider 
        value={{
            todos: state.todos
        }}>
        {props.children}
        </TodoContext.Provider> 
    );
}
export default TodoState;