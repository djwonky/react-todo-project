import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import TodosList from './TodosList';
import Header from "./Header";
import InputTodo from "./InputTodo";

const TodoContainer = () => {
    

    const getInitialTodos = () => {
        const temp = localStorage.getItem("todos");
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    };

    const [todos, setTodos] = useState(getInitialTodos());

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);

    const handleCheckbox = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return{
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        )
    };

    const deleteTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    };

    const addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    todo.title = updatedTitle;
                }
                return todo
            })
        )
    };

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodo}/>
                <TodosList 
                    todos={todos}
                    handleCheckboxProps={handleCheckbox}
                    deleteTodoProps={deleteTodo}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )

};

export default TodoContainer;