import { User } from '@repo/types';
import styles from "./page.module.css";
import { getUsers } from "../server/users";


export default async function Home() {
  // const users: User[] = await getUsers();
  // console.log('USERS', users)

  const user = null;

  return (
    <div className={styles.page}>
      This application is going to be awesome. I'm working on it!
    </div>
  );
}
