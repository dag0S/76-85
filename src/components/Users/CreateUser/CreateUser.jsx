import { useState, useRef } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './CreateUser.module.css';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const CreateUser = ({ onCreateUser }) => {
  const nameInputRef = useRef('');
  const ageInputRef = useRef('');

  const [error, setError] = useState();

  const createUserHandler = e => {
    e.preventDefault();
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        massage: 'Эти поля не могут быть пустыми',
      });
      return;
    }

    if (+inputUserAge < 1) {
      setError({
        title: 'Некорректный возвраст',
        massage: 'Возвраст должен быть больше 0',
      });
      return;
    }

    onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          massage={error.massage}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" ref={nameInputRef} />
          <label htmlFor="age">Возраст</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;
