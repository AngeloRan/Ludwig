import { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const Letter = styled.div`
  cursor: pointer;
  flex: 1;
  max-height: 25%;
  background-image: radial-gradient(transparent, var(--color-grey-50));
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);

  width: 100%;
  transition: all 0.7s ease-out;
  opacity: 0;
  transform: translateY(100%);
  perspective: 3000px;

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  & > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: red;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%, 0 0);
    transition: all 0.8s;
    transform-origin: top;
    z-index: 100;
  }

  ${(props) =>
    props.hover &&
    css`
      & > div:first-child {
        animation: openLetter 0.8s forwards;
      }

      & > div:nth-child(3) {
        animation: moveLetter 1.5s forwards;
        animation-delay: 0.3s;
      }
    `}
  ${(props) =>
    !props.hover &&
    css`
      & > div:first-child {
        animation: closeLetter 2s forwards;
      }

      & > div:nth-child(3) {
        animation: resetLetter 1.5s forwards;
      }
    `}

  & > div:nth-child(2) {
    height: 85%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid var(--color-grey-50);
    box-shadow: 0 -8px 14px -14px rgba(0, 0, 0, 0.6);
    z-index: 99;
    background-color: white;
  }

  & > div:nth-child(3) {
    position: absolute;
    left: 5%;
    top: 8%;
    width: 90%;
    height: 80%;
    background-color: blue;
    z-index: 80;
  }
`;

function Lettera() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px`,
  });

  const [hover, setHover] = useState(false);

  return (
    <Letter
      ref={ref}
      inView={inView}
      hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div></div>
      <div></div>
      <div></div>
    </Letter>
  );
}

export default Lettera;
