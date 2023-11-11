import Card from '../../UI/Card/Card';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
