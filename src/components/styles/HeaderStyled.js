import styled from "styled-components";
import { Moon } from "@styled-icons/entypo/Moon";
import { Sun } from "@styled-icons/feather/Sun";

export const HeaderStyled = styled.header`
  padding: 50px;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SwitchWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 50px;
  height: 26px;
  margin: 40px auto 0 auto;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  transform: scale(1.5);
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    margin: 0 0 0 40px;
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;

    &.left {
      transform: translateX(0);
    }

    &.right {
      transform: translateX(24px);
    }
  }
`;

export const SwitchBtn = styled.input`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
`;
export const SunIcon = styled(Sun)`
  width: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MoonIcon = styled(Moon)`
  width: 15px;
  color: ${({ theme }) => theme.colors.text};
`;
