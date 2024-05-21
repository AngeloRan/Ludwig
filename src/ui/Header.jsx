import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import MenuHeader from "../features/MenuHeader/MenuHeader";
import { Link } from "react-router-dom";
import BtnPrenotazione from "./BtnPrenotazione";

const StyledHeader = styled.header`
  z-index: 1000;
  position: fixed;
  height: 14dvh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-black-transparent);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  /* transition: all 0.6s cubic-bezier(0.1, 0.5, 0.5, 1.5); */
  transition: all 0.5s ease;
  @media only screen and (min-width: 768px) {
    height: 100dvh;
    width: 20rem;
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
        height: 100dvh;
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
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  @media only screen and (min-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 40%;
  }
`;

const Titolo = styled.div`
  position: relative;
  & span {
    display: block;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light),
      var(--color-gold)
    );
    /* background-image: linear-gradient(
      to right,
      var(--color-grey-50),
      var(--color-grey-50)
    ); */
    font-size: 1.4rem;
    color: transparent;
    background-clip: text;
    /* font-family: "sottotitolo", sans-serif; */
    font-weight: 400;

    &:first-child {
      /* font-family: "titolo", sans-serif; */
      font-family: "Syncopate", sans-serif;
      /* font-family: "Gruppo", sans-serif; */
      letter-spacing: 3px;
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: 400;
      padding-top: 2rem;
      padding-left: 2rem;
      @media only screen and (min-width: 768px) {
        font-size: 2.5rem;
        padding-left: 3rem;
        letter-spacing: 4px;
      }
    }

    &:last-child {
      padding-left: 2.8rem;
      width: 15rem;
      transform: translateY(-75%) translateX(14%);
      font-style: italic;

      @media only screen and (min-width: 768px) {
        padding-left: 3rem;
        transform: translateY(-75%) translateX(25%);
      }
    }
  }
`;

const IconaMenu = styled.div`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
  width: 2.5rem;
  margin-top: 3rem;
  @media only screen and (min-width: 768px) {
    margin-top: -6rem;
    margin-left: 7.5rem;
    width: 3rem;
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

    function handleScroll() {
      if (window.innerWidth >= 768) return;
      setShow(false);
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        setShow(true);
      }, 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);

  function handleOpen() {
    setOpen((open) => !open);
  }

  return (
    <StyledHeader show={show} open={open}>
      <HeaderRow>
        <Titolo>
          <Link to="/" onClick={() => setOpen(false)}>
            <span>Ludwig</span>
            <span>Hair Couture</span>
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
