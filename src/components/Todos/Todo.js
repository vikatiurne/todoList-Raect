import { RiTodoFill, RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      onDoubleClick={() => deleteTodo(todo.id)}
      // className={!todo.isCompleted ? styles.todo : `${styles.completedTodo} ${styles.todo}`}
      className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}
      // если сделать так то к названию класса добавиться false
      // className={`${styles.todo} ${todo.isCompleted && styles.completedTodo}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin6Fill
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}
export default Todo;
