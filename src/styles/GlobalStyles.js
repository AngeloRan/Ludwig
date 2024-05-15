import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
      /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-black-transparent: rgba(0,0,0,0.8);

  --color-gold: #a18343;
  --color-gold-light: #F1e5ac;
  --color-gold-lighter: #FFF8DC

}



@font-face {
    font-family: 'titolo';
    src: url('/font/titolo.ttf');
}
@font-face {
    font-family: 'sottotitolo';
    src: url('/font/sottotitolo.ttf');
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: "Titillium Web", sans-serif;
  color: var(--color-grey-900);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var();
  color: var();
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var();
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
