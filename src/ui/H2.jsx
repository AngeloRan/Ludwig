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
      text-shadow: 0 0 8px var(--color-gold);
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
