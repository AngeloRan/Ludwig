import styled, { css } from "styled-components";
import Lettera from "../../ui/Lettera";
import RowMenuPagina from "./RowMenuPagina";
import { useInView } from "react-intersection-observer";

const StyledMenuPagina = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    var(--color-grey-50),
    var(--color-grey-200)
  );
  padding: 10%;
  border-radius: 3px;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
  opacity: 0;
  transform: translateY(50%);
  transition: all 0.9s;

  @media only screen and (min-width: 768px) {
    padding: 6%;
    margin-top: 10%;
    height: 80dvh;
    justify-content: center;
  }

  ${(props) =>
    props.inview &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

function MenuPagina() {
  console.log("render");
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `100px 0px`,
  });

  return (
    <StyledMenuPagina ref={ref} inview={inView}>
      <RowMenuPagina
        to="/menuservizi"
        p="Scopri i nostri servizi esclusivi, studiati dai nostri hair stylists per adattarsi all'unicità di ogni cliente"
      >
        Menù servizi
      </RowMenuPagina>
      <RowMenuPagina
        to="/galleria"
        p="Esplora il nostro archivio fotografico e lascia che la tua storia diventi anche la nostra, la bellezza è tale quando è condivisa"
      >
        Galleria
      </RowMenuPagina>
      <RowMenuPagina
        to="/contatti"
        p="Ci sono mille motivi per rimanere in contatto: segui le nostre attività sui social, rimani aggiornato su tutte le novità, proponici il tuo profilo professionale"
      >
        Contatti
      </RowMenuPagina>
    </StyledMenuPagina>
  );
}

export default MenuPagina;
