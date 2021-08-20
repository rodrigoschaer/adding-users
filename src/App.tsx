import React, { useState } from "react";
import "./App.scss";

import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

type PreviousList = {
  name: string;
  age: number;
  id?: string;
};

function App() {
  const [usersList, setUsersList] = useState<any>([]);

  const handleUpdateList = (uName: string, uAge: string) => {
    console.log(usersList);
    setUsersList((prevUsersList: PreviousList[]) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onAddUser={handleUpdateList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
