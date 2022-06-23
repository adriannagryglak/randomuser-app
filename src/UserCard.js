import { useState } from 'react';
import {updateUser } from './features/Users';
import {useDispatch} from 'react-redux';


export default function UserCard(props){
    const [newName, setNewName] = useState("");
    const dispatch = useDispatch();

    function handleUpdate(){
        const user = {id: props.data.id, name: newName}
        dispatch(updateUser(user))
        //update json
        fetch(`http://localhost:8000/users/${user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
    }
    return <div>
        <h1>{props.data.name}</h1>
        <div>
            <input onChange={(e)=>{setNewName(e.target.value)}} placeholder="new name"></input>
            <button onClick={handleUpdate}>update this user</button>
            <button onClick={props.delete}>DELETE</button>
        </div>
    </div>
}