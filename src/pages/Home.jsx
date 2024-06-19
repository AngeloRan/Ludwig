import styled, { css } from "styled-components";
import Presentazione from "../ui/Presentazione";
import MenuPagina from "../features/MenuPagina/MenuPagina";
import SliderFoto from "../features/SliderFoto/SliderFoto";
// import H2 from "../ui/H2";
import Storia from "../ui/Storia";
// import ScrittaCorpoPagina from "../ui/ScrittaCorpoPagina";
import Footer from "../ui/Footer";
import VideoFotoIniziale from "../ui/VideoFotoIniziale";

const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  ${(props) =>
    props.type === "storia" &&
    css`
      padding: 0;
    `}
  padding-bottom: 4rem;
  /* overflow: hidden; */
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
    padding-bottom: 10rem;
  }
  @media only screen and (min-width: 1201px) {
    padding-bottom: 10rem;
    padding-left: 20%;
    padding-right: 14%;
  }
`;

const ContainerSlide = styled.div`
  width: 100%;
  overflow: hidden;
`;

function Home() {
  return (
    <>
      <VideoFotoIniziale tipo="video" src="/menuservizi.mp4" type="video/mp4" />

      <ContainerHome>
        <Presentazione type="iniziale" />
        <MenuPagina />
        <Presentazione type="inframmezzo" author="Eiselle">
          {" "}
          "Per trovare il tuo look, la sperimentazione è sempre cosa buona e
          giusta: capelli lunghi, corti, lisci, ricci, morbidi o naturali, alla
          Monna Lisa, punk, spettinati, acconciati ad arte, non importa. Quello
          che importa è che sia siano sani, perché coi capelli sani puoi fare
          ciò che vuoi."
        </Presentazione>
      </ContainerHome>

      <ContainerSlide>
        <SliderFoto />
      </ContainerSlide>
      <ContainerHome type="storia">
        <Storia />
      </ContainerHome>

      <Footer />
    </>
  );
}

export default Home;
