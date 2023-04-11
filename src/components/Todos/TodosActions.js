import { RiDeleteBin2Fill, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({ completedTodoCount,todoCount, deleteAllTodo, deleteCompletedTodo}) {
  return (
    <div className={styles.actionsButtons}>
      <div className={`${completedTodoCount===0 ? styles.notActiveButton : ''}`}>
        <Button
          title="Видалити виконане"
          onClick={deleteCompletedTodo}
          todoCount={todoCount}
          // disabled={!completedTodoCount}
        >
          <RiRefreshLine />
        </Button>
      </div>
      <Button title="Видалити все" onClick={deleteAllTodo}>
        <RiDeleteBin2Fill />
      </Button>
    </div>
  );
}
export default TodosActions;
