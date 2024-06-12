import { useContext } from "react";
import styled, { css } from "styled-components";
import { ServiziContext } from "../features/MenuServizi/ContainerRowMenuServizi";

const StyledPSeparatore = styled.p`
  transition: all 0.5s;
  margin-top: 4rem;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent 1%,
    var(--color-grey-300) 50%,
    transparent 99%
  );
  @media only screen and (min-width: 768px) {
    margin: 5rem auto;
    width: 40%;
  }
  ${(props) =>
    props.type === "gold" &&
    css`
      margin-top: 0;
      height: 1px;
      width: 20rem;
      background-image: linear-gradient(
        to right,
        transparent 1%,
        var(--color-gold) 50%,
        transparent 99%
      );
      @media only screen and (min-width: 768px) {
        margin: 5rem auto;
        width: 40rem;
      }
    `}
  ${(props) =>
    props.isOpen &&
    css`
      opacity: 0;
      transform: translateY(-100%);
    `}
`;

function PSeparatore({ type }) {
  const { isOpen = false } = useContext(ServiziContext);

  return <StyledPSeparatore type={type} isOpen={isOpen}></StyledPSeparatore>;
}

export default PSeparatore;
