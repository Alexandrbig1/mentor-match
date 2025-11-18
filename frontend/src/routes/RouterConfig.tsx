import { lazy } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Home = lazy(() => import("../pages/Home/Home"));
const Mentors = lazy(() => import("../pages/Mentors/Mentors"));

export const RouterConfig = (): RouteObject[] =>
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mentors" element={<Mentors />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  );
