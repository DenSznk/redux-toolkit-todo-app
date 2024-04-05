import {useSelector} from 'react-redux'
import TodoItem from "./TodoItem";

const TodoList = ({removeTodo, toggleTodoComplete}) => {

  const todos = useSelector(state => StaticRange.todos.todos)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        {...todo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
