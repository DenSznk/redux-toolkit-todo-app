import { useState } from "react";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");


  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  return (
    <div className="App">
     <InputField
     text={text}
     handleInput={setText}
     handleSubmit={addTodo}
     />
     <TodoList
     toggleTodoComplete={toggleTodoComplete}
     removeTodo={removeTodo}
     />
    </div>
  );
}

export default App;
