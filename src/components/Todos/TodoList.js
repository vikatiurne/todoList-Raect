import Todo from './Todo';
import { FaClipboardList } from 'react-icons/fa';
import styles from './TodoList.module.css';

function TodoList({ onAddTodo, deleteTodo, toggleTodo,todoCount,completedTodoCount }) {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoCounts}>
        <p>Cтворені завдання<span>{todoCount}</span></p>
        <p>Виконано<span>{completedTodoCount} {!!onAddTodo.length && <>з {todoCount}</>}</span></p>
      </div>
      {!onAddTodo.length && (
        <div className={styles.noTodo}>
          <FaClipboardList className={styles.noTodoIcon} />
          <p>
            <b>У вас ще немає зареєстрованих завдань</b> <br/> Створюйте завдання та
            впорядковуйте свої справи
          </p>
        </div>
      )}
      {onAddTodo.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
