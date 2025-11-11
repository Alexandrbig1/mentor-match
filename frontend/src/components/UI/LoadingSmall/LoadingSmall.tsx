import { RotatingLines, ThreeDots } from "react-loader-spinner";
import { LoadingSmallWrapper } from "./LoadingSmall.styled";

export default function LoadingSmall({ message }: { message?: boolean }) {
  return (
    <LoadingSmallWrapper>
      {message ? (
        <ThreeDots
          visible={true}
          height="54"
          width="54"
          color="#0466c8"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <RotatingLines
          visible={true}
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          strokeColor="#49a078"
        />
      )}
    </LoadingSmallWrapper>
  );
}
