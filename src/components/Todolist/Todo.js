import Card from '../UI/Card'
import './Todo.css';
import TodoList from './TodoList';
const Todo = (props) => {
    return (
        <div>
          <Card className="todos">
          <TodoList items={props.todos}/>
        </Card>
        </div>
        
    );
};

export default Todo;