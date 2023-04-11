import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
// import {image} from '.assets//image/rocket.png'
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

const completedTodoCount=todos.reduce((sum,todo)=>sum+todo.isCompleted,0)

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const deleteAllTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos([])
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <div className="todoTitle">
        <img src={require('./assets/image/rocket.png')} alt="logo" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
      <div>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <TodosActions
            deleteAllTodo={deleteAllTodoHandler}
            deleteCompletedTodo={deleteCompletedTodoHandler}
            todoCount={todos.length}
            completedTodoCount={completedTodoCount}
          />
        )}
        <TodoList
        completedTodoCount={completedTodoCount}
        todoCount = {todos.length}

          onAddTodo={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
