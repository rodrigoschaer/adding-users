import { FormEvent, ChangeEvent, useState } from "react";

import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import classes from "./AddUser.module.scss";

type AddUserProps = {
  onAddUser: any;
};

type ErrorModalTypes = {
  title?: string;
  message?: string;
};

export const AddUser = (props: AddUserProps) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState<ErrorModalTypes | null>();

  const handleAddUser = (event: FormEvent) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Your username or age must not be empty",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Your age must be different than zero",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        />
      )}
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
    </>
  );
};
