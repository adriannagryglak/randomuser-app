import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetch("http://localhost:8000/users");
    if (!response.ok) {
      throw Error("ooops we've got an issue witch resposne");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    //fetchUsers.rejected();
    //issue- promise is fulfilled mimo rzucania errorem na zły satus
    return err.message;
  }
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  try {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(`couldn't add new user`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    return err.message;
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`couldn't delete user`);
      }else{
        return id;
      }
    } catch (err) {
      return err.message;
    }
  });

  export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`couldn't update this user`);
      }else{
        const data = await response.json();
        return data;
      }
    } catch (err) {
      return err.message;
    }
  });

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        //mozemy mapowac po action.payload i cos dodawac 
        //bylo concat - ale przy rerenderowaniu dublowalowal data 
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        //do i need status ? czy chce wyswietlac errora 
        //only inside createSlide we can mutate state like this - immerJS working under the hood
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => {
            return user.id !== action.payload;
          });
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) => {
            return user.id === action.payload.id ? action.payload : user;
          });
      });
  },
});

export const allUsersSelector = (state) => state.users.users;
export const usersStatusSelector = (state) => state.users.status;
export const usersErrorSelector = (state) => state.users.error;

export default userSlice.reducer;
