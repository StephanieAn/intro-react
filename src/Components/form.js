import React, { useRef } from "react";

export default function Form(){
    const inputRef = useRef();
    console.log(inputRef);
    const clickHandler = () => {
        const inputElement = inputRef.current;
        console.log(inputElement )
    };
    console.log(clickHandler());
    return(
        <>
            <form className="todo__form">
                <input ref={inputRef} type="text" placeholder="Type a new todo" />
                <button type="submit" onClick={clickHandler}>Add Todo</button>
            </form>
        </>
    )
};