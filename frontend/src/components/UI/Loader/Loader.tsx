import { ClockLoader } from "react-spinners";
import { LoaderWrapper } from "./Loader.styled";

export default function Loader() {
  return (
    <LoaderWrapper>
      <ClockLoader color="#0353a4" />
    </LoaderWrapper>
  );
}
