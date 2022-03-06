import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePages } from "../components/pages/home/HomePages";
import { Layout } from "./Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
