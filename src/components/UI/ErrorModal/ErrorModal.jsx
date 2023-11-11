import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, massage, onCloseModal }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onCloseModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{massage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseModal}>Закрыть</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
