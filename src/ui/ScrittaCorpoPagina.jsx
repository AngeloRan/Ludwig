import styled from "styled-components";

const StyledScrittaCorpoPagina = styled.div`
  padding: 5rem 3rem 0 3rem;
  & p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

function ScrittaCorpoPagina({ children }) {
  return <StyledScrittaCorpoPagina>{children}</StyledScrittaCorpoPagina>;
}

export default ScrittaCorpoPagina;
