import { FormEvent } from "react";

export const AddUser = () => {
  const handleAddUser = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleAddUser}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};
