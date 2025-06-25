import { RotatingLines } from "react-loader-spinner";
import { LoadingSmallWrapper } from "./LoadingSmall.styled";

export default function LoadingSmall() {
  return (
    <LoadingSmallWrapper>
      <RotatingLines
        visible={true}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        strokeColor="#49a078"
      />
    </LoadingSmallWrapper>
  );
}
