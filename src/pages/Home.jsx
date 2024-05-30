import styled from "styled-components";
import Presentazione from "../ui/Presentazione";
import MenuPagina from "../features/MenuPagina/MenuPagina";
import SliderFoto from "../features/SliderFoto/SliderFoto";

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
  padding-bottom: 4rem;
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
        <Presentazione />
        <MenuPagina />
      </ContainerHome>
      <SliderFoto />
    </>
  );
}

export default Home;
