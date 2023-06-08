import React, {useState} from 'react';
import NewItem from './components/NewItem/NewItem';
import Todo from './components/Todolist/Todo';

const DUMMY_ITEMS = [
  {
    id: "e1",
    title: "Send CV"
  },
  { 
    id: "e2", 
    title: "Video talking about myself" 
  },
  {
    id: "e3",
    title: "Video talking about my favorite project",
  },
];

const App = () => {
  const [todos, setTodos] = useState(DUMMY_ITEMS);

  const addTodoHandler = todo => {
    setTodos( (prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div>
      <NewItem onAddTodo={addTodoHandler}/>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
