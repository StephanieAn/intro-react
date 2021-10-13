import React, { useState } from "react";

export default function List(){
    const initialTodos = ["Learn React", "Add Some Effects", "Third things to do"];
    const [todos, setTodos] = useState(initialTodos);
    console.log(setTodos);
    
    const itemTodo = todos.map((todo)=> (
        <li className="list__item" key={todo}><input type="checkbox"/>{todo}</li>
      ));
    
    return(
        <>
        <div className="list">
            <h2>Todos</h2>
            <ul className="list__ul">
                {itemTodo}
            </ul>
        </div>
        </>
    )
};