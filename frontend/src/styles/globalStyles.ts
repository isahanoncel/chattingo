import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.Inter};
  }

  a{
    text-decoration: none;
  }
  img{
    max-width: 100%;
  }

  ul, li {
    list-style: none;
  }
`;

export const sizes = {
    mobile: ["0px", "768px"],
    tablet: ["768px", "1024px"],
};

export const device = {
    mobile: `@media (min-width: ${sizes.mobile[0]}) and (max-width: ${sizes.mobile[1]})`,
    tablet: `@media (min-width: ${sizes.tablet[0]}) and (max-width: ${sizes.tablet[1]})`,
};
