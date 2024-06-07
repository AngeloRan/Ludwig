import styled from "styled-components";

const StyledH4 = styled.h3`
  font-family: "syncopate", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: transparent;
  background-color: var(--color-gold);
  background-clip: text;
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

function H4({ children }) {
  return <StyledH4>{children}</StyledH4>;
}

export default H4;
