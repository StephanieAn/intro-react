import React from "react";

export default function Form(){
    return(
        <>
            <form className="todo__form">
                <input placeholder="Type a new todo" />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
};