import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './CreateUser.module.css';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const CreateUser = ({ onCreateUser }) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const createUserHandler = e => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        massage: 'Эти поля не могут быть пустыми',
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: 'Некорректный возвраст',
        massage: 'Возвраст должен быть больше 0',
      });
      return;
    }

    onCreateUser(inputName, inputAge);

    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = e => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = e => {
    setInputAge(e.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
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
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
