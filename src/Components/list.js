import React, { useState } from "react";

const initialTodos = [{
    id : 1,
    text:"Learn React",
    complete: true
}, 
{
    id : 2,
    text:"Add Some Effects",
    complete: false
}, 
{
    id : 3,
    text:"Third things to do",
    complete: false
}];

export default function List(){
    const [todos, setTodos] = useState(initialTodos);
    console.log(setTodos);
    const [checkedState, setCheckedState] = useState(
        new Array(todos.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((todos, id) =>
          id === position ? !todos : todos
        );
        setCheckedState(updatedCheckedState);
    };

    const itemTodo = todos.map((todo)=> (
        <li className="list__item" key={todo.id}>
            <input 
            type="checkbox"
            checked={checkedState[todo.id]}
            onChange={() => handleOnChange(todo.id)}/>
            {todo.text}
        </li>
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