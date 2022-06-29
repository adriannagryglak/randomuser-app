import { useState } from "react";
import {deleteUser, updateUser } from "./features/Users";
import { useDispatch } from "react-redux";

export default function UserCard({ user }) {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.name}</h1>
      <div>
        <input
          onChange={e => setNewName(e.target.value)}
          value={newName}
          placeholder="new name"
        />
        <button
          onClick={() => {
            dispatch(updateUser({id: user.id, name: newName}));
            setNewName("");
          }}>update this user</button> 
        <button onClick={()=>{dispatch(deleteUser(user.id))}}>DELETE</button>
      </div>
    </div>
  );
}
