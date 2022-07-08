import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";

export const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    border-width: 2px;
    font-weight: 500;
  }

  svg path {
    stroke: 2px;
  }
`;

export const CloseIcon = styled(Close)`
  height: 40px;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
`;
