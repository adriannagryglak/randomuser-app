import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addUser } from "../features/Users.js";
import {Add} from '@styled-icons/fluentui-system-filled/Add'

export default function UsersList() {
  const [addedUser, setAddedUser] = useState("");
  const dispatch = useDispatch();

  return (
    <section>
      <input
      type="text"
        placeholder="add new user"
        value={addedUser}
        onChange={(e) => setAddedUser(e.target.value)}
      />
      <Add
        onClick={() => {
          if(addedUser){
            dispatch(addUser({ name: addedUser, id: nanoid() }));
            setAddedUser("");
          }
        }}
      />
    </section>
  );
}
