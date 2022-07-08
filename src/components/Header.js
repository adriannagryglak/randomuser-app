import { useDispatch, useSelector } from "react-redux";
import { HeaderStyled, SwitchBtn, SwitchWrapper, SunIcon, MoonIcon } from "./styles/HeaderStyled.js";
import { updateTheme, themeSelector } from "../features/Theme";

export default function Header() {
  const dispatch = useDispatch();
  const isLightTheme = useSelector(themeSelector);

  return (
    <HeaderStyled>
      <h1>Let's get CRUDing </h1>
      <SwitchWrapper>
        <SwitchBtn
          type="checkbox"
          id="theme-switch"
          onClick={() => {
            dispatch(updateTheme(!isLightTheme));
          }}
        />
        <SunIcon />
        <MoonIcon />
        <div className={`ball ${isLightTheme ? 'left' : 'right'}`}></div>
        <label htmlFor="theme-switch" className="visuallyhidden">Theme switch</label>
      </SwitchWrapper>
    </HeaderStyled>
  );
}