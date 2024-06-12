import styled, { css } from "styled-components";

const StyledH2 = styled.h2`
  /* text-align: center; */
  /* font-family: "Syncopate", sans-serif; */
  font-size: 2.4rem;

  ${(props) =>
    props.type === "storia" &&
    css`
      font-size: 2rem;
    `}

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 8px;
  color: var(--color-grey-500);
  ${(props) =>
    props.dorata &&
    css`
      font-family: "syncopate", sans-serif;
      color: var(--color-gold);
      padding-bottom: 0;
    `}
  ${(props) =>
    props.type === "prenotazioni" &&
    css`
      display: inline-block;
      font-family: "syncopate", sans-serif;
      margin-top: 5vh;
      padding: 0 7%;
      width: 100%;
      letter-spacing: 3px;
      color: var(--color-gold);
      font-size: 2.8rem;
      @media only screen and (min-width: 768px) {
        letter-spacing: 5px;
      }
    `}
`;

function H2({ children, type, dorata }) {
  return (
    <StyledH2 dorata={dorata} type={type}>
      {children}
    </StyledH2>
  );
}

export default H2;
