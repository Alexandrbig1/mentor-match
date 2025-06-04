import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default RootLayout;
