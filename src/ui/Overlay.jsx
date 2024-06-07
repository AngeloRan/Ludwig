import styled, { css } from "styled-components";
import { GalleriaContext } from "../pages/Galleria";
import { useContext, useRef } from "react";

const StyledOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  transition: opacity 0.9s ease;
  opacity: 0;
  ${(props) =>
    !props.isFotoOpen
      ? css`
          height: 0px;
        `
      : css`
          height: 100vh;
          opacity: 1;
        `}
`;

const FotoOverlay = styled.picture`
  width: 90%;
  height: 60%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 768px) {
    width: 70%;
    height: 80%;
  }
`;

const ImgOverlay = styled.img`
  display: block;
  height: 100%;
  margin: auto;
  border-radius: 5px;
  transition: all 1s;
  transform: scale(0);
  will-change: transform;
  backface-visibility: hidden;
  ${(props) =>
    props.isFotoOpen &&
    css`
      transform: scale(1);
    `}
`;

function Overlay() {
  const { srcOpen, isFotoOpen, handleOpen } = useContext(GalleriaContext);
  const ImgRef = useRef();

  function closeOverlay(e) {
    if (ImgRef?.current?.contains(e.target)) return;
    handleOpen();
  }

  return (
    <StyledOverlay isFotoOpen={isFotoOpen} onClick={closeOverlay}>
      <FotoOverlay>
        <ImgOverlay
          ref={ImgRef}
          src={srcOpen}
          isFotoOpen={isFotoOpen}
        ></ImgOverlay>
      </FotoOverlay>
    </StyledOverlay>
  );
}

export default Overlay;
