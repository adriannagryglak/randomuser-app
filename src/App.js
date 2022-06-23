import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useSelector, useDispatch} from 'react-redux';
import {getUsers, addUser, deleteUser } from './features/Users';

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

  function handleAdd(){
    const user = {name: addedUser, id: users[users.length - 1].id + 1 };
    dispatch(addUser(user));
    //update json- but here? as async outside of handler, or in users.js ?
    fetch('http://localhost:8000/users',{method: 'POST', headers: {
      'Content-Type': 'application/json' }, body: JSON.stringify(user)});
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello world this is CRUD exercise
        {isLoading ? <p>Loading...</p> : <p>LOADED</p>}
        {error && <p>{error}</p>}
        <div className="add">
            <input placeholder="Name" onChange={(e)=>{setAddedUser(e.target.value)}}></input>
            <button onClick={handleAdd}>Add User</button>
        </div>
        {users.map((user, i) => {
            return <UserCard 
                      data={user} 
                      key={i} 
                      delete={()=>{dispatch(deleteUser({id: user.id}))
                                    //update json
                                    fetch(`http://localhost:8000/users/${user.id}`, {
                                      method: 'DELETE',
                                      headers: {
                                        'Content-Type': 'application/json'
                                      },
                                    })
                                  }}/>;
        })}
      </header>
    </div>
  );
}

export default App;
