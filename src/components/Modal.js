import ReactDOM from "react-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalStyled, CloseIcon } from "./styles/ModalStyled.js";
import { updateUser } from "../features/Users";
import { Check2 } from '@styled-icons/bootstrap/Check2';

export default function Modal({ close, id }) {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const element = (
    <ModalStyled>
      <div>
        <input
        type="text"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          placeholder="new name"
        />
        <Check2
          onClick={() => {
            if (newName) {
              dispatch(updateUser({ id: id, name: newName }));
              setNewName("");
              close();
            }
          }}
        />
        <CloseIcon onClick={close} alt="close editing modal"/>
      </div>
    </ModalStyled>
  );
  return ReactDOM.createPortal(element, document.getElementById("modal"));
}
