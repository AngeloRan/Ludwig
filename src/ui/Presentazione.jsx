import { Link } from "react-router-dom";
import styled from "styled-components";
import H2 from "./H2";
import ScrittaCorpoPagina from "./ScrittaCorpoPagina";

const LinkNomeAzienda = styled.span`
  display: inline-block;
  color: var(--color-gold);
  transition: all 0.2s ease;
  background-color: var(--color-grey-50);
  border-radius: 4px;
  z-index: 1000;
  &:hover {
    /* position: absolute; */
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    /* padding: 0 1rem; */
  }
`;

const P = styled.p`
  text-align: center;
  /* font-size: 1.2rem; */
  padding-top: 2rem;
  padding-bottom: 1rem;
  /* text-align: left; */
  color: var(--color-grey-400);
  font-style: italic;
  & p {
    padding-top: 1rem;
    color: var(--color-grey-700);
    font-style: normal;
    /* text-align: left; */
  }
  @media only screen and (min-width: 768px) {
    padding-top: 10rem;
    /* padding-bottom: 5rem; */
    margin-right: 30%;
    margin-left: 30%;
  }
`;

function Presentazione({ children, type }) {
  return (
    <ScrittaCorpoPagina>
      {type === "iniziale" && (
        <>
          <H2>Ludwig, passione per la perfezione</H2>
          <p>
            Benvenuti nel mondo di{" "}
            <LinkNomeAzienda>
              <Link to="/menuservizi">Ludwig Hair Couture</Link>
            </LinkNomeAzienda>
            , dove l'arte per la cura dei capelli si fonde con l'esperienza e la
            passione. Presso il nostro salone di parrucchieri trasformiamo ogni
            cliente in un'icona di bellezza.
          </p>
          <p>
            Scoprite il nostro regno di trattamenti personalizzati, tagli su
            misura e colorazioni impeccabili, guidati dalla nostra dedizione
            alla perfezione. Abbandonatevi alla cura delle nostre mani esperte e
            lasciate che il vostro stile rifletta la vostra unicità. Siate i
            protagonisti della vostra bellezza: il vostro viaggio verso
            l'eleganza comincia qui, da Ludwig.
          </p>
        </>
      )}
      {type === "inframmezzo" && (
        <>
          <P>
            "Per trovare il tuo look, la sperimentazione è sempre cosa buona e
            giusta: capelli lunghi, corti, lisci, ricci, morbidi o naturali,
            alla Monna Lisa, punk, spettinati, acconciati ad arte, non importa.
            Quello che importa è che sia siano sani, perché coi capelli sani
            puoi fare ciò che vuoi."
            <p>-Eliselle</p>
          </P>
        </>
      )}
    </ScrittaCorpoPagina>
  );
}

export default Presentazione;
