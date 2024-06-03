import styled, { css } from "styled-components";
import Foto from "./Foto";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const StyledSliderFoto = styled.div`
  position: relative;
  height: 60dvh;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  transform: translateX(60%);
  transition: all 1.8s;
  /* width: 0; */
  margin-bottom: 1rem;
  ${(props) =>
    props.inView &&
    css`
      /* width: 100%; */
      transform: translateX(0);
      opacity: 1;
    `}

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 75%;
    margin-left: 25%;
    height: 80dvh;
    /* margin-bottom: 10%; */
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  @media only screen and (min-width: 1201px) {
    width: 82%;
    margin-left: 18%;
    height: 85dvh;
    /* margin-bottom: 10%; */
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `100px 0px`,
  });

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

        setTimeout(
          () =>
            setCurrentSlide((curr) => {
              setPrevSlide(curr);
              return curr + 1;
            }),
          [100]
        );
        return;
      }

      setCurrentSlide((curr) => {
        setPrevSlide(curr);
        return curr + 1;
      });
    }, 5000);

    return () => clearInterval(intervallo);
  }, [fotos.length, ultima]);

  return (
    <Link to="/galleria">
      <StyledSliderFoto ref={ref} inView={inView}>
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
    </Link>
  );
}

export default SliderFoto;
