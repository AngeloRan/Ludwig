import styled, { css } from "styled-components";
import Footer from "../ui/Footer";
import ScrittaCorpoPagina from "../ui/ScrittaCorpoPagina";
import Overlay from "../ui/Overlay";
import { createContext, useState } from "react";

const StyledGalleria = styled.div``;

const ContainerVideo = styled.div`
  height: 70vh;
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContainerGalleria = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;
  ${(props) =>
    props.type === "galleria" &&
    css`
      padding-top: 5rem;
      background-image: linear-gradient(
        to bottom right,
        var(--color-grey-50),
        var(--color-grey-200)
      );
      padding-bottom: 20rem;
    `}

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
    width: 70%;
  }
  @media only screen and (min-width: 1201px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 30vh;
    gap: 5rem;
    row-gap: 5rem;
  }
`;

const Foto = styled.picture`
  border-radius: 5px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
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

const GalleriaContext = createContext();

function Galleria() {
  const immagini = new Array(20).fill("./img/capelli.jpg");

  const [isFotoOpen, setIsFotoOpen] = useState(false);
  const [srcOpen, setSrcOpen] = useState(null);

  function handleOpen(e) {
    setIsFotoOpen((isFotoOpen) => !isFotoOpen);
    handleSrcOpen(e);
  }

  function handleSrcOpen(e) {
    setSrcOpen(e.target.src);
  }

  return (
    <StyledGalleria>
      <GalleriaContext.Provider value={{ isFotoOpen, srcOpen, handleOpen }}>
        <ContainerVideo>
          <Overlay></Overlay>
          <Video autoPlay muted loop>
            <source src="/menuservizi.mp4" type="video/mp4" />
            Your browser is not supported
          </Video>
        </ContainerVideo>
        <ContainerGalleria>
          <ScrittaCorpoPagina>ciao</ScrittaCorpoPagina>
        </ContainerGalleria>
        <ContainerGalleria type="galleria">
          <ContainerFoto>
            {immagini.map((el) => (
              <Foto>
                <FotoImg src={el} onClick={handleOpen} />
              </Foto>
            ))}
          </ContainerFoto>
        </ContainerGalleria>
        <Footer />
      </GalleriaContext.Provider>
    </StyledGalleria>
  );
}
export { GalleriaContext };
export default Galleria;
