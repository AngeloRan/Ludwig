import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;

  padding-top: 2rem;
  padding-bottom: 1rem;

  color: var(--color-grey-400);
  font-style: italic;
  & p {
    padding-top: 1rem;
    color: var(--color-grey-700);
    font-style: normal;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 10rem;

    margin-right: 30%;
    margin-left: 30%;
  }
`;

function Pitalic({ children }) {
  return <StyledP>{children}</StyledP>;
}

export default Pitalic;
