import { ErrorIcon, ErrorText, ErrorWrapper } from "./ErrorMessage.styled";

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <ErrorWrapper>
      <ErrorIcon>
        <use href="/sprite.svg#icon-not-found"></use>
      </ErrorIcon>
      <ErrorText>{error}</ErrorText>
    </ErrorWrapper>
  );
}
