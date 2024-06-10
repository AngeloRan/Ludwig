import styled, { css } from "styled-components";
import ScrittaCorpoPagina from "../../ui/ScrittaCorpoPagina";

import H4 from "../../ui/H4";
import { ServiziContext } from "./ContainerRowMenuServizi";
import { useContext } from "react";

const StyledRowMenuServizi = styled.div`
  transition: transform 0.6s ease, max-height 0.4s ease, opacity 0.2s ease;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translateY(-100px);

  ${(props) =>
    props.isOpen &&
    css`
      transition: transform 0.8s ease, opacity: .8s ease;;
      opacity: 1;
      /* overflow: visible; */
      max-height: 160rem;
      backface-visibility: hidden;
      transform: translateY(-20px);

      @media only screen and (min-width: 768px) {
        transform: translateY(-80px);
      }
    `}
`;
const ContainerHome = styled.div`
  backface-visibility: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  padding-bottom: 4rem;
  /* overflow: hidden; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
    /* padding-bottom: 5rem; */
  }
  @media only screen and (min-width: 1201px) {
    /* padding-bottom: 5rem; */
    padding-left: 20%;
    padding-right: 14%;
  }
`;

const PSeparatore = styled.p`
  margin-top: 4rem;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent 1%,
    var(--color-grey-300) 50%,
    transparent 99%
  );
  @media only screen and (min-width: 768px) {
    margin: 5rem auto 0;
    width: 40%;
  }
`;

const P = styled.p`
  color: var(--color-grey-500);
  font-style: italic;
  @media only screen and (min-width: 768px) {
    padding: 0 25%;
  }
`;

const Prezzo = styled.p`
  color: var(--color-gold);
`;

function RowMenuServizi({ titolo, prezzo, descrizione, ultimo }) {
  const { isOpen } = useContext(ServiziContext);
  return (
    <StyledRowMenuServizi isOpen={isOpen}>
      <ContainerHome>
        <ScrittaCorpoPagina>
          <H4>{titolo}</H4>
          <P>{descrizione}</P>
          <Prezzo>{prezzo !== "da convenire" ? `${prezzo}€` : prezzo}</Prezzo>
          {!ultimo && <PSeparatore />}
        </ScrittaCorpoPagina>
      </ContainerHome>
    </StyledRowMenuServizi>
  );
}

export default RowMenuServizi;
