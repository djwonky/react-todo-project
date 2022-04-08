import React, { useState } from "react";

import { GiHammerSickle } from "react-icons/gi";

const InputTodo = props => {
    const [inputText, setInputText] = useState("");

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText({
                title: "",
            });
        } else {
            alert("You haven't written anything....");
        }
    };
    
    return (
        <form 
            onSubmit={handleSubmit}
            className="form-container"
        >
            <input 
                type="text"
                className="input-text"
                placeholder="Add to-do..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button
                className="input-submit"
            >
                <GiHammerSickle />
            </button>
        </form>
    );
}

export default InputTodo