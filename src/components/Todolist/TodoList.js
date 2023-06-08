import React from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
      
    return <ul className='todos-list'>
        {props.items.map( (todo) => (
            <TodoItem
            key={todo.id}
            title={todo.title}
            />
        ))}
      </ul>
};

export default TodoList;