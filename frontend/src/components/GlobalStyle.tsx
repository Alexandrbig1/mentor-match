import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { primaryFont } from "./fonts.tsx";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-transition: 0.3s ease-in-out;
  --linear-transition: 0.3s linear;
}


*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${primaryFont};
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

body {
  scroll-behavior: smooth;
  margin: 0 auto;
  font-size: 1.6rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  line-height: 1.5;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color var(--primary-transition);
  outline: none;
}

button {
  font-family: inherit;
  color: currentColor;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background var(--primary-transition), color var(--primary-transition);

    &:hover,
    &:focus {
      outline: none;
    }
}

input, textarea {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}
`;
