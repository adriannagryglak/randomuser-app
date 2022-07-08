import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  fetchRandomUsers,
  usersStatusSelector,
  addUser,
  allUsersSelector,
  TestSelector
} from "./features/Users.js";
import { themeSelector, getTheme } from "./features/Theme";
import UsersList from "./components/UsersList.js";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header.js";
import AddUser from "./components/AddUser.js";
import { FooterStyled } from "./components/styles/FooterStyled.js";
import { theme } from "./components/styles/ThemeStyled";
import { ThemeProvider } from "styled-components";

function App() {
  const status = useSelector(usersStatusSelector);
  const users = useSelector(allUsersSelector);
  const test = useSelector(TestSelector);
  const isLight = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
      //this could happen earlier in index.js ?
      //why look at status not just do it for the first render ?
    } else if (status === "succeeded" && users.length === 0) {
      dispatch(fetchRandomUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    dispatch(getTheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
   if(test){
    users.forEach(user => {
      dispatch(addUser(user));
    })
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test]);


  return (
    <ThemeProvider theme={isLight ? theme.light : theme.dark}>
      <>
        <GlobalStyles />
        <Header />
        <main>
          <AddUser />
          <UsersList />
        </main>
        <FooterStyled>
          <p>made with love</p>
        </FooterStyled>
      </>
    </ThemeProvider>
  );
}

export default App;
