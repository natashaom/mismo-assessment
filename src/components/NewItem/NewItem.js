import React, {useState} from "react";

import ItemForm from "./ItemForm";
import './NewItem.css';

const NewItem = (props) => {

    const [ isEditing , setIsEditing] = useState(false);

    const saveTodoDataHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        };
        props.onAddTodo(todoData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-todo">
            <span className="title">To do list</span>
            {!isEditing && <button onClick={startEditingHandler}>Add</button>}
            {isEditing && <ItemForm onSaveTodoData={saveTodoDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewItem;