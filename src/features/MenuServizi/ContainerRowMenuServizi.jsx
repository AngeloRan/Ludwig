import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";

const StyledContainerRowMenuServizi = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const ServiziContext = createContext(false);

function ContainerRowMenuServizi({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = function () {
    setIsOpen((open) => !open);
  };

  return (
    <ServiziContext.Provider
      value={{ isOpen: isOpen, onHandleIsOpen: handleIsOpen }}
    >
      <StyledContainerRowMenuServizi>{children}</StyledContainerRowMenuServizi>
    </ServiziContext.Provider>
  );
}

ContainerRowMenuServizi.H2o = H2o;

export { ContainerRowMenuServizi, ServiziContext };

const StyledH2o = styled.h2`
  backface-visibility: hidden;
  will-change: transform;
  position: relative;
  font-size: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  @media only screen and (min-width: 1201px) {
    display: inline-block;
    font-size: 3.5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 5px;
  @media only screen and (min-width: 768px) {
    letter-spacing: 8px;
  }
  color: var(--color-grey-500);
  ${(props) =>
    props.dorata &&
    css`
      font-family: "syncopate", sans-serif;
      color: var(--color-grey-500);
      padding-bottom: 0;
    `}

  ${(props) =>
    props.isOpen &&
    css`
      transform: scale(1.1);
      color: var(--color-gold);
      @media only screen and (min-width: 768px) {
        transform: none;
      }
    `}
`;

function H2o({ children, type, dorata }) {
  const { isOpen, onHandleIsOpen } = useContext(ServiziContext);

  return (
    <StyledH2o
      dorata={dorata}
      type={type}
      onClick={onHandleIsOpen}
      isOpen={isOpen}
    >
      {children}
    </StyledH2o>
  );
}
