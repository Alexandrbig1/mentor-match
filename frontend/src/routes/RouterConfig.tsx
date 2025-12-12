import { lazy } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import RestrictedRoute from "../components/RestrictedRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BecomeAMentor from "../pages/BecomeMember/BecomeMentor";
import PrivateRoute from "../components/PrivateRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const Mentors = lazy(() => import("../pages/Mentors/Mentors"));
const UserProfile = lazy(() => import("../pages/UserProfile/UserProfile"));

export const RouterConfig = (): RouteObject[] =>
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
       <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
      />
      <Route
        path="/become-a-mentor"
        element={
          <PrivateRoute>
            <BecomeAMentor />
          </PrivateRoute>
        }
      />
     <Route
        path="/profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route path="mentors" element={<Mentors />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  );
