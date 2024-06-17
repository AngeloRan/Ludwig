import styled, { css } from "styled-components";

const SliderFoto = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  /* scroll-behavior: ; */
  /* background-color: red; */
  /* overflow-x: scroll; */
  /* opacity: 0; */
  /* transform: translateX(60%); */
  transition: all 1.8s;
  /* width: 0; */
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 75%;
    margin-left: 25%;
    height: 80vh;
    /* margin-bottom: 10%; */
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  @media only screen and (min-width: 1201px) {
    width: 82%;
    margin-left: 18%;
    height: 85vh;
    /* margin-bottom: 10%; */
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * 6);
  animation: scroll 5s linear infinite;
  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 3));
    }
  }
`;

const DivSlide = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ImmagineSlide = styled.img`
  width: 100%;
`;

const fotos = ["./img/foto_1.PNG", "./img/foto_2.PNG", "./img/foto_3.PNG"];

function Prova() {
  return (
    <SliderFoto>
      <SliderTrack>
        {fotos.map((fot) => (
          <DivSlide>
            <ImmagineSlide src={fot} />
          </DivSlide>
        ))}
        {fotos.map((fot) => (
          <DivSlide>
            <ImmagineSlide src={fot} />
          </DivSlide>
        ))}
      </SliderTrack>
    </SliderFoto>
  );
}

export default Prova;
