import styled from "styled-components";
import Foto from "./Foto";
import { useEffect, useState } from "react";

const StyledSliderFoto = styled.div`
  position: relative;
  height: 31dvh;
  width: 100%;
  margin-bottom: 8rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 75%;
    margin-left: 25%;
    height: 80dvh;
    margin-bottom: 10%;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  @media only screen and (min-width: 1201px) {
    width: 82%;
    margin-left: 18%;
    height: 85dvh;
    margin-bottom: 10%;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
`;

function SliderFoto() {
  const fotos = [
    "https://i.pinimg.com/564x/53/94/f1/5394f1dd8b2ad94fb213c4e68a8ecee7.jpg",
    "https://i.pinimg.com/736x/dd/dc/ca/dddcca5e157a1ef07f18b6453c921b3c.jpg",
    "https://i.pinimg.com/564x/9a/ce/6d/9ace6d1618018d269972e6e8e7872899.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  const ultima = currentSlide === fotos.length - 1;
  const ritornoacapo = prevSlide === fotos.length - 1;

  useEffect(() => {
    const intervallo = setInterval(() => {
      if (ultima) {
        setCurrentSlide((curr) => {
          setPrevSlide(curr);
          return -1;
        });
        return;
      }
      setCurrentSlide((curr) => {
        setPrevSlide(curr);
        return curr < fotos.length - 1 ? curr + 1 : 0;
      });
    }, 5000);

    return () => clearInterval(intervallo);
  }, [fotos.length, ultima]);

  return (
    <StyledSliderFoto>
      {[
        ...fotos.map(
          (fot, i, arr) =>
            i <= 2 && (
              <Foto
                key={"a" + i}
                id={-3 + i}
                fot={fot}
                currentSlide={currentSlide}
                ritornoacapo={ritornoacapo}
              />
            )
        ),
        ...fotos.map((fot, i, arr) => (
          <Foto
            key={i}
            id={i}
            fot={fot}
            currentSlide={currentSlide}
            ritornoacapo={ritornoacapo}
          />
        )),
        ...fotos.map(
          (fot, i, arr) =>
            i <= 2 && (
              <Foto
                key={"b" + i}
                id={arr.length + i}
                fot={fot}
                currentSlide={currentSlide}
                ritornoacapo={ritornoacapo}
              />
            )
        ),
      ]}
    </StyledSliderFoto>
  );
}

export default SliderFoto;
