import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPresentazione = styled.div`
  padding: 5rem 3rem 0 3rem;
  & p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.8rem;
  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    padding-bottom: 3rem;
    padding-top: 5rem;
  }
  text-transform: uppercase;
  font-weight: 100;
  padding-bottom: 2rem;
  letter-spacing: 3px;
`;

const LinkNomeAzienda = styled.span`
  display: inline-block;
  color: var(--color-gold);
  transition: all 0.2s ease;
  background-color: white;
  border-radius: 4px;
  z-index: 1000;
  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.8);
  }
`;

function Presentazione() {
  return (
    <StyledPresentazione>
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
        Scoprite il nostro regno di trattamenti personalizzati, tagli su misura
        e colorazioni impeccabili, guidati dalla nostra dedizione alla
        perfezione. Abbandonatevi alla cura delle nostre mani esperte e lasciate
        che il vostro stile rifletta la vostra unicità. Siate i protagonisti
        della vostra bellezza: il vostro viaggio verso l'eleganza comincia qui,
        da Ludwig.
      </p>
    </StyledPresentazione>
  );
}

export default Presentazione;
