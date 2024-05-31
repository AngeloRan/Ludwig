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
  --color-gold-lighter: #FFF8DC;


}



/* @font-face {
    font-family: 'titolo';
    src: url('/font/titolo.ttf');
}
@font-face {
    font-family: 'sottotitolo';
    src: url('/font/sottotitolo.ttf');
} */


@font-face {
    font-family: 'sottotitolo';
    src: url('/font/sottotitolino.ttf');
    font-display: swap;
}
@font-face {
  font-family: 'gruppo';
  src: url('/font/Gruppo-Regular.ttf');
  font-display: swap;
}
/* @font-face {
  font-family: 'syncopate' ;
  src: url('/font/Syncopate-Regular.ttf');
  font-display: swap;
} */


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
  
  color: var(--color-grey-700);
  background-color: var(--color-grey-50);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.4rem;
  /* overflow: hidden; */
  @media only screen and (min-width: 768px) {
    font-size: 1.6rem;
    
  }
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

h1,
h2,
h3,
h4,
h5,
h6 {
 color: var(--color-grey-700);
 /* font-family: "syncopate", sans-serif ; */
}


img {
  max-width: 100%;
}


@keyframes openLetter {

  30% {
    z-index: 100;
  }

  100% {
    transform: rotateX(-180deg);
    z-index: 50;
  }
}

@keyframes closeLetter {

  0% {
    transform: rotateX(-180deg);
    z-index: 50;
  }

  70% {
    transform: rotateX(-180deg);
    z-index: 50;
  }
  81%{
    z-index: 100;
  }

  100% {
    z-index: 100;
    transform: rotate(0);
  }
  
}

@keyframes moveLetter{


  0% {
    transform: translateY(0);
  }

  49% {
    z-index: 80;
  }

  50% {
    transform: translateY(-100%);

    z-index: 1001;
  }

  100% {
  
    transform: translateY(0);
    z-index: 1001;
  }
}

@keyframes resetLetter  {

0% {
  transform: translateY(0);
  z-index: 1001;
}

49% {
    z-index: 80;
  }

50% {
    transform: translateY(-100%);
  }

100% {
    transform: translateY(0);
  }

}



`;

export default GlobalStyles;
