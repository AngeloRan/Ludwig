import styled, { css } from "styled-components";
import Presentazione from "../ui/Presentazione";
import MenuPagina from "../features/MenuPagina/MenuPagina";
import SliderFoto from "../features/SliderFoto/SliderFoto";
import H2 from "../ui/H2";
import Storia from "../ui/Storia";
import ScrittaCorpoPagina from "../ui/ScrittaCorpoPagina";
import Footer from "../ui/Footer";

const VideoContainer = styled.div`
  width: 100%;
  height: 70dvh;
  @media only screen and (min-width: 768px) {
    height: 100dvh;
  }
`;

const VideoEl = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  animation-name: Show-video;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  @keyframes Show-video {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

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
      <VideoContainer>
        <VideoEl autoPlay muted loop>
          <source src="/barbiere.mp4" type="video/mp4" />
          Your browser is not supported!
        </VideoEl>
      </VideoContainer>
      <ContainerHome>
        <Presentazione type="iniziale" />
        <MenuPagina />
        <Presentazione type="inframmezzo"></Presentazione>
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
