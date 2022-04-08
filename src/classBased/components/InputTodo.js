import React, { Component } from "react";

import { GiHammerSickle } from "react-icons/gi";

class InputTodo extends Component {
   
   state = {
       title: "",
   };

   onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
   };

   handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: "",
            });
        } else {
            alert("You haven't written anything!");
        }
   };

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="form-container"
            >
                <input 
                    type="text"
                    placeholder="Add To-do..."
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    className="input-text"
                />
                <button
                    className="input-submit"
                >
                    <GiHammerSickle 
                        style={{
                            color: "#333",
                            fontSize: "26px", 
                            marginTop: "2px",
                        }}
                    />
                </button>
            </form>
        )
    }
};

export default InputTodo;