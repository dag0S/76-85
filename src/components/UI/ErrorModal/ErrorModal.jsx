import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';
import ReactDom from 'react-dom';

const Backdrop = ({ onCloseModal }) => {
  return <div className={styles.backdrop} onClick={onCloseModal}></div>;
};

const Modal = ({ title, massage, onCloseModal }) => {
  return (
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
  );
};

const ErrorModal = ({ title, massage, onCloseModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById('backdrop')
      )}
      {ReactDom.createPortal(
        <Modal title={title} massage={massage} onCloseModal={onCloseModal} />,
        document.getElementById('modal')
      )}
    </>
  );
};

export default ErrorModal;
