import { User } from '@repo/types';
import styles from "./page.module.css";
import { getUsers } from "../server/users";


export default async function Home() {
  const users: User[] = await getUsers();
  console.log('USERS', users)

  return (
    <div className={styles.page}>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
