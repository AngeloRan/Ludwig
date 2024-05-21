import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: 2.4rem;
  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 6px;
  color: var(--color-grey-500);
`;

function H2({ children }) {
  return <StyledH2>{children}</StyledH2>;
}

export default H2;
