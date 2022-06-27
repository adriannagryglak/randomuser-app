import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: {value: []},
    reducers: {
        getUsers: (state, action)=> {
            state.value = action.payload;
        },
        addUser: (state, action)=> {
            state.value.push(action.payload);
        },
        deleteUser: (state, action)=> {
            state.value = state.value.filter((user)=>{
                return user.id!== action.payload.id
            });
        },
        updateUser: (state, action)=> {
            state.value = state.value.map(user=>{
                return user.id === action.payload.id ? action.payload : user;
            });
        },
    },
})

export const {getUsers, addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;