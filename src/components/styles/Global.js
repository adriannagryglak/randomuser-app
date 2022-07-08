import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.7s ease;
}

input[type=text] {
  background-color: ${({ theme }) => theme.colors.background};
  height: 40px;
  border-radius: 50px;
  padding-left: 10px;
  margin: 20px 20px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;

  &:focus {
    outline: none;
  }
}

#root{
    text-align: center;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

svg{
cursor: pointer;
color: ${({ theme }) => theme.colors.text};
height: 25px;
}

`;

export default GlobalStyles;
