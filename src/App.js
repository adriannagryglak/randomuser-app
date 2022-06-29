import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, allUsersSelector, usersStatusSelector, usersErrorSelector } from "./features/Users";
import { nanoid } from "@reduxjs/toolkit";

function App() {

  const [addedUser, setAddedUser] = useState("");
  const users = useSelector(allUsersSelector); 
  const status = useSelector(usersStatusSelector);
  const errors = useSelector(usersErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
      //this could happen earlier in index.js - question to ask
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function handleAdd() {
    dispatch(addUser({ name: addedUser, id: nanoid() }));
    setAddedUser("");
  }

  const content = status === 'loading' ? <p>LOADING....</p> : 
                status === 'succeeded' && users.length > 0 ? users.map(user => <UserCard user={user} key={user.id}/>) :
                status === 'failed' ? <p>{errors}</p> : null;

  return (
    <div className="App">
      <header className="App-header">
        Hello world this is CRUD exercise
        <div>
          <input
            placeholder="Name"
            value={addedUser}
            onChange={e => setAddedUser(e.target.value)}
          />
          <button onClick={handleAdd}>Add User</button>
        </div>
        {content}
      </header>
    </div>
  );
}

export default App;
