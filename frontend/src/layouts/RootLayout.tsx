import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { RootLayoutWrapper } from "./RootLayout.styled";
import Footer from "../components/Footer/Footer";
import Loader from "../components/UI/Loader/Loader";

function RootLayout() {
  return (
    <>
      <Header />
      <RootLayoutWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </RootLayoutWrapper>
      <Footer />
    </>
  );
}

export default RootLayout;
