import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import MenuHeader from "../features/MenuHeader/MenuHeader";
import { Link } from "react-router-dom";
import BtnPrenotazione from "../features/MenuHeader/BtnPrenotazione";

const StyledHeader = styled.header`
  z-index: 1000;
  position: fixed;
  height: 14vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-black-transparent);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  /* transition: all 0.6s cubic-bezier(0.1, 0.5, 0.5, 1.5); */
  transition: all 0.5s ease;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 100vh;
    width: 25rem;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }

  @media only screen and (min-width: 768px) and (max-width: 1480px) {
    height: 100vh;
    width: 19rem;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }

  ${(props) => {
    return (
      !props.show &&
      css`
        height: 0px;
        @media only screen and (min-width: 768px) {
          width: 0px;
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.open &&
      css`
        /* transition: all 0.5s cubic-bezier(0.1, 0.5, 0.5, 1.5); */
        transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        height: 100vh;
        clip-path: none;
        @media only screen and (min-width: 768px) {
          width: 100%;
          clip-path: none;
        }
      `
    );
  }}
`;

const HeaderRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  @media only screen and (min-width: 768px) {
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 25rem;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 35%;
  }
`;

// const Titolo = styled.div`
//   position: relative;
//   height: 50%;
//   @media only screen and (min-width: 768px) {
//     height: auto;
//   }

//   & span {
//     display: block;
//     background-image: linear-gradient(
//       to right,
//       var(--color-gold-light),
//       var(--color-gold)
//     );
//     font-size: 1.4rem;
//     color: transparent;
//     background-clip: text;
//     -webkit-background-clip: text;
//     font-weight: 400;

//     &:first-child {
//       font-family: "Syncopate", sans-serif;
//       letter-spacing: 3px;
//       font-size: 3rem;
//       text-transform: uppercase;
//       font-weight: 400;

//       @media only screen and (min-width: 768px) {
//         font-size: 3rem;
//         letter-spacing: 4px;
//       }
//       @media only screen and (min-width: 768px) and (max-width: 1480px) {
//         font-size: 2.5rem;
//         margin-left: -6rem;
//       }
//     }

//     &:last-child {
//       text-align: center;
//       margin-top: -1.5rem;
//       font-size: 1.8rem;
//       font-weight: 400;
//       font-style: italic;
//       @media only screen and (min-width: 768px) {
//         font-size: 1.8rem;
//       }
//       @media only screen and (min-width: 768px) and (max-width: 1480px) {
//         font-size: 1.5rem;
//         margin-left: -6rem;
//       }
//     }
//   }
// `;
const Titolo = styled.div`
  position: relative;
  height: 50%;
  @media only screen and (min-width: 768px) {
    height: auto;
  }

  & h2,
  & h3 {
    text-align: center;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );
  }

  & h2 {
    font-family: "Syncopate", sans-serif;
    letter-spacing: 6px;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 400;

    @media only screen and (min-width: 768px) {
      font-size: 3rem;
      letter-spacing: 6px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1480px) {
      font-size: 2.5rem;
      letter-spacing: 5px;
      margin-left: -6rem;
    }
  }
  & h3 {
    font-family: "Syncopate", sans-serif;
    letter-spacing: 5px;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: -1rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.4rem;
      letter-spacing: 4px;
      margin-left: -3px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1480px) {
      font-size: 1.1rem;
      margin-left: -6rem;
    }
  }
`;

const IconaMenu = styled.div`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
  width: 2.5rem;
  position: absolute;
  right: 7%;
  top: 35%;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 0;
    width: 3rem;
    right: 3%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1480px) {
    right: 12%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 0;

    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );
    transition: all 0.1s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );
    transition: all 0.1s;
  }

  ${(props) => {
    return (
      props.open &&
      css`
        &::before {
          transform: rotate(45deg);
          transform-origin: 0% 0%;
        }
        &::after {
          transform: rotate(-45deg);
          transform-origin: 0% 0%;
        }
      `
    );
  }}
`;

function Header() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isScrolling;
    let puntoDiPartenza = window.scrollY;

    function handleScroll(e) {
      if (window.innerWidth >= 768) return;
      setShow(false);
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        if (window.scrollY < puntoDiPartenza) setShow(true);
        puntoDiPartenza = window.scrollY;
      }, 200);
    }

    function handleResize() {
      setShow(true);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleOpen() {
    setOpen((open) => !open);
  }

  return (
    <StyledHeader show={show} open={open}>
      <HeaderRow>
        <Titolo>
          {/* <Link to="/" onClick={() => setOpen(false)}>
            <span>Ludwig</span>
            <span>Hair Couture</span>
          </Link> */}
          <Link to="/" onClick={() => setOpen(false)}>
            <h2>LUDWIG</h2>
            <h3>HAIR COUTURE</h3>
          </Link>
        </Titolo>
        <IconaMenu open={open} onClick={handleOpen}></IconaMenu>
        <BtnPrenotazione head="head" open={open} />
      </HeaderRow>
      <MenuHeader open={open} onOpen={handleOpen} />
    </StyledHeader>
  );
}

export default Header;
