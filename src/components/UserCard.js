import { useState } from "react";
import { deleteUser } from "../features/Users";
import { useDispatch } from "react-redux";
import { UserCardStyled } from "./styles/UserCardStyled";
import Modal from "./Modal";
import {Edit} from '@styled-icons/evaicons-solid/Edit';
import {Delete} from '@styled-icons/material-sharp/Delete';

export default function UserCard({ user }) {
  //does global state needs info about modal? maybe? not neccesary ? 
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <UserCardStyled>
      <h1>{user.name}</h1>
      <div>
        <Edit
          onClick={() => {
            setModal(true);
          }}
        />

        <Delete
          onClick={() => {
            dispatch(deleteUser(user.id));
          }}
        />
        {modal && (
          <Modal
            close={() => {
              setModal(false);
            }}
            id={user.id}
          />
        )}
      </div>
    </UserCardStyled>
  );
}
