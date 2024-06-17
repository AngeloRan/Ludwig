import styled, { css } from "styled-components";
import Footer from "../ui/Footer";
import Overlay from "../ui/Overlay";
import { createContext, useState } from "react";
import H2 from "../ui/H2";
import VideoFotoIniziale from "../ui/VideoFotoIniziale";
import Prova from "../features/SliderFoto/Prova";

const StyledGalleria = styled.div`
  background-image: linear-gradient(
    to bottom right,
    var(--color-grey-50),
    var(--color-grey-200)
  );
`;

const ContainerGalleria = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
  }
  @media only screen and (min-width: 1201px) {
    padding-left: 20%;
    padding-right: 14%;
  }
`;

const ContainerFoto = styled.div`
  width: 90%;
  display: grid;
  gap: 3rem;
  row-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20vh;
  backface-visibility: hidden;

  @media only screen and (min-width: 768px) {
    grid-auto-rows: 30vh;
    width: 80%;
  }
  @media only screen and (min-width: 1201px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 40vh;
    gap: 3rem;
    row-gap: 3rem;
  }
`;

const TitoloContainerFoto = styled.div`
  margin-top: 5rem;
  width: 100%;
  margin-bottom: 5rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }
  text-align: center;

  & > p {
    font-size: 1.8rem;
    color: var(--color-grey-500);
    font-style: italic;
    margin: 5% 20%;
    @media only screen and (min-width: 768px) {
      margin: 0% 20%;
    }
  }
`;

const Foto = styled.picture`
  border-radius: 5px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
  background-color: transparent;
`;

const FotoImg = styled.img`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  transform: scale(1.1) translateZ(0);

  backface-visibility: hidden;
  will-change: transform;
  &:hover {
    backface-visibility: hidden;
    transform: scale(1);
  }
`;

export const GalleriaContext = createContext({});
const fotogalleria = [
  "./img/foto_1.PNG",
  "./img/foto_2.PNG",
  "./img/foto_3.PNG",
  "./img/foto_4.PNG",
];

function Galleria() {
  const [isFotoOpen, setIsFotoOpen] = useState(false);
  const [srcOpen, setSrcOpen] = useState("");

  function handleSrcOpen(e) {
    setSrcOpen(e?.target?.src ? e.target.src : "");
  }
  function handleOpen(e) {
    setIsFotoOpen((isFotoOpen) => !isFotoOpen);
    handleSrcOpen(e);
  }

  return (
    <StyledGalleria>
      <GalleriaContext.Provider value={{ isFotoOpen, srcOpen, handleOpen }}>
        <Overlay />
        <VideoFotoIniziale
          tipo="video"
          autoPlay
          muted
          loop
          src="/menuservizi.mp4"
          type="video/mp4"
        />

        <ContainerGalleria></ContainerGalleria>
        <ContainerGalleria type="galleria">
          <TitoloContainerFoto>
            <H2 dorata={true}>Galleria</H2>
            <p>
              Lasciati ispirare dalle nostre creazioni e sorprenditi di quello
              che anche tu puoi diventare...
            </p>
          </TitoloContainerFoto>
          <ContainerFoto>
            {fotogalleria.map((el) => (
              <Foto>
                <FotoImg src={el} onClick={handleOpen} />
              </Foto>
            ))}
          </ContainerFoto>
        </ContainerGalleria>

        <Footer page="menuservizi" type="galleria" />
      </GalleriaContext.Provider>
      {/* <Prova></Prova> */}
    </StyledGalleria>
  );
}

export default Galleria;
