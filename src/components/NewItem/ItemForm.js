import React, { useState } from "react";

import './ItemForm.css';

const ItemForm = (props) => {

    const [enteredTitle, setTitle] = useState('')
    

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const todoData = {
            title: enteredTitle
        };
        props.onSaveTodoData(todoData);
        setTitle('');

    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-todo__controls">
            <div className="new-todo__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
        </div>
        <div className="new-todo__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add</button>
        </div>
    </form>
    );
};

export default ItemForm;