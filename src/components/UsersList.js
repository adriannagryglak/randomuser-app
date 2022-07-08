import { useSelector } from "react-redux";
import {
  allUsersSelector,
  usersStatusSelector,
  usersErrorSelector,
} from "../features/Users.js";
import UserCard from "./UserCard.js";
import { UsersListStyled } from "./styles/UsersListStyled";

export default function UsersList() {
  const users = useSelector(allUsersSelector);
  const status = useSelector(usersStatusSelector);
  const errors = useSelector(usersErrorSelector);

  const content =
    status === "loading" ? (
      <p>LOADING....</p>
    ) : status === "failed" ? (
      <p>{errors}</p>
    ) : users.length > 0 && status === "succeeded" ? (
      users.map((user) => <UserCard user={user} key={user.name} />)
    ) : null;

  return (
    <UsersListStyled>
      {content}
    </UsersListStyled>
  );
}
