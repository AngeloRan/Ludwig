import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import H3 from "../../ui/H3";

const StyledRowMenuPagina = styled.div`
  /* flex: 1; */
  /* max-height: 25%; */
  text-align: center;
  width: 100%;
  transform: translateY(100%);
  transition: all 1.2s;
  opacity: 0;
  &:not(:last-child) {
    padding-bottom: 3rem;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      height: 1px;
      width: 7rem;
      transform: translateX(-50%);
      /* background-color: var(--color-gold); */
      background-color: var(--color-grey-400);
    }
  }
  &:not(:first-child) {
    padding-top: 2rem;
  }
  @media only screen and (min-width: 768px) {
    transform: translateY(100%);
  }

  ${(props) =>
    props.inview &&
    css`
      opacity: 1;
      transform: translateY(0);
      @media only screen and (min-width: 768px) {
        transform: translateY(0);
      }
      & > p {
        transform: translateY(0);
        opacity: 1;
      }
    `};
`;

const P = styled.p`
  transform: translateY(100%);
  opacity: 0;
  margin: 0 auto;
  color: var(--color-grey-400);
  font-style: italic;
  transition: opacity 3s, transform 1.5s;
  @media only screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

function RowMenuPagina({ children, to, p }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px`,
  });

  return (
    <StyledRowMenuPagina ref={ref} inview={inView}>
      <H3>
        <Link to={to}>{children}</Link>
      </H3>
      <P>
        <Link to={to}>{p}</Link>
      </P>
    </StyledRowMenuPagina>
  );
}

export default RowMenuPagina;
