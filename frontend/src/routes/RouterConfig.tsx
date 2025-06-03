import { lazy } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Mentors = lazy(() => import("../pages/Mentors/Mentors"));

export const RouterConfig = () => {
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mentors" element={<Mentors />} />
    </Route>
  );
};
