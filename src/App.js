import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, addUser, deleteUser, updateUser } from "./features/Users";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [addedUser, setAddedUser] = useState("");

  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        if (!response.ok) {
          throw Error("ooops we've got an issue");
        }
        const data = await response.json();
        dispatch(getUsers(data));
        setError(null);
      } catch (err) {
        setError("ooops we've got an issue " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAdd() {
    const id = users.length === 0 ? 0 : users[users.length - 1].id + 1;
    const user = { name: addedUser, id };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`couldn't add new user`);
        }
        dispatch(addUser(user));
      })
      .catch((err) => {
        setError("ooops we've got an issue " + err.message);
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`couldn't delete this user`);
        }
        dispatch(deleteUser({ id }));
      })
      .catch((err) => {
        setError("ooops we've got an issue " + err.message);
      });
  }

  function handleUpdate(id, name) {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`couldn't update this user`);
        }
        dispatch(updateUser({ id, name }));
      })
      .catch((err) => {
        setError("ooops we've got an issue " + err.message);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello world this is CRUD exercise
        {isLoading ? <p>Loading...</p> : <p>LOADED</p>}
        {error && <p>{error}</p>}
        <div className="add">
          <input
            placeholder="Name"
            onChange={(e) => {
              setAddedUser(e.target.value);
            }}
          ></input>
          <button onClick={handleAdd}>Add User</button>
        </div>
        {users.map((user, i) => {
          return (
            <UserCard
              data={user}
              key={i}
              delete={() => {
                handleDelete(user.id);
              }}
              update={handleUpdate}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
