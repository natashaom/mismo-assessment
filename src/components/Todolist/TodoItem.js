import React from 'react';

import Card from '../UI/Card';
import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <li>
      <Card className='todo-item'>
        <div className='todo-item__description'>
          <h2>{props.title}</h2>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
