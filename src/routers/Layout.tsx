import { Outlet } from "react-router-dom";
import { FooterLayout } from "../components/layouts/footer/FooterLayout";
import { HeaderLayout } from "../components/layouts/header/HeaderLayout";

export const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <>
        <Outlet />
      </>
      <FooterLayout />
    </>
  );
};
