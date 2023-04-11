import styles from './Button.module.css';

function Button({ onClick, children, desabled, title }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      children={children}
      title={title}
      desabled={desabled}
    ></button>
  );
}

export default Button;
