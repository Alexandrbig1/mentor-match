import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { RootLayoutWrapper } from "./RootLayout.styled";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <RootLayoutWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </RootLayoutWrapper>
      <Footer />
    </>
  );
}

export default RootLayout;
