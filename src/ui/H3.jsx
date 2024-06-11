import styled from "styled-components";

const StyledH3 = styled.h3`
  font-family: "syncopate", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: transparent;
  background-color: var(--color-gold);
  background-clip: text;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

function H3({ children }) {
  return <StyledH3>{children}</StyledH3>;
}

export default H3;
