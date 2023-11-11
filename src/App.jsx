import { useState } from 'react';
import CreateUser from './components/Users/CreateUser/CreateUser';
import UserList from './components/Users/UserList/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList(prevUserList => [
      { name: name, age: age, id: Math.random().toString() },
      ...prevUserList,
    ]);
  };

  return (
    <div>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
