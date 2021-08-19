import { FormEvent, ChangeEvent, useState } from "react";

import { Card } from "../UI/Card";
import { Button } from "../UI/Buttton";

import classes from "./AddUser.module.scss";

export const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleAddUser = (event: FormEvent) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={handleChangeUsername}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={handleChangeAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
