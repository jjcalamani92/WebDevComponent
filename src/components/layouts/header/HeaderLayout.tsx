import { HeaderIcon_1 } from "./HeaderIcon";
import { HeaderLogo_1 } from "./HeaderLogo";
import { HeaderNavbar_1 } from "./HeaderNavbar";

export const HeaderLayout = () => {
  return (
    <>
      <header className="header-1">
        <HeaderLogo_1 />
        <HeaderNavbar_1 />
        <HeaderIcon_1 />
      </header>
      <br />
    </>
  );
};
