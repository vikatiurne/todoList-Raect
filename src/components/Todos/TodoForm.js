import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.length) addTodo(inputText);
    setInputText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Додайте нове завдання"
        />
        <Button type="submit">
          <span>Створити</span>
          <FiPlusCircle className={styles.addTodoIcon} />
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
