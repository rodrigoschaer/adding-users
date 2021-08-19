import classes from "./UsersList.module.css";
import { Card } from "../UI/Card";

type UserType = {
  id?: string;
  name: string;
  age: number;
};

type UsersListProps = {
  users: UserType[];
};

export const UsersList = (props: UsersListProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: UserType) => {
          <li>
            {user.name} ({user.age}) years old
          </li>;
        })}
      </ul>
    </Card>
  );
};
