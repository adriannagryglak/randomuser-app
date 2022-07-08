import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
`;
