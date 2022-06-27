import { useState } from 'react';

export default function UserCard(props){
    const [newName, setNewName] = useState("");

    return <div>
        <h1>{props.data.name}</h1>
        <div>
            <input onChange={(e)=>{setNewName(e.target.value)}} placeholder="new name"></input>
            <button onClick={()=>{props.update(props.data.id, newName)}}>update this user</button>
            <button onClick={props.delete}>DELETE</button>
        </div>
    </div>
}