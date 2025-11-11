import {
  PageNotFoundImg,
  PageNotFoundLink,
  PageNotFoundText,
  PageNotFoundTitle,
  PageNotFoundTitleWrapper,
  PageNotFoundWrapper,
} from "./PageNotFound.styled";

export default function PageNotFound() {
  return (
    <PageNotFoundWrapper>
      <PageNotFoundTitleWrapper>
        <PageNotFoundTitle>Oops! This page doesn’t exist.</PageNotFoundTitle>
        <PageNotFoundText>
          We couldn’t find the page you’re looking for.
          <br />
          Let’s get you back to{" "}
          <PageNotFoundLink to="/">Mentor Match Home</PageNotFoundLink>.
        </PageNotFoundText>
      </PageNotFoundTitleWrapper>
      <PageNotFoundImg src="/icons/page-not-found.svg" alt="Page not found" />
    </PageNotFoundWrapper>
  );
}
