import styled, { css } from "styled-components";

const StyledFoto = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transition: all 2s;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 50%;
  }
  @media only screen and (min-width: 1201px) {
    width: 33.5%;
  }

  ${(props) =>
    props.ritornoacapo &&
    css`
      transition: all 0s;
    `}

  ${(props) => css`
    transform: translateX(${(props.cur - props.id) * -100}%);
  `}

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(95%);
  }
`;

function Foto({ fot, id, currentSlide, ritornoacapo }) {
  return (
    <StyledFoto id={id} cur={currentSlide} ritornoacapo={ritornoacapo}>
      <img src={fot} alt="ciao" loading="lazy" />
    </StyledFoto>
  );
}

export default Foto;
