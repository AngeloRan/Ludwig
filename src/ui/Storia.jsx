import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import ScrittaCorpoPagina from "./ScrittaCorpoPagina";
import H2 from "./H2";
import { useInView } from "react-intersection-observer";
import ContainerFotoMobile from "./ContainerFotoMobile";

const DivFix = styled.div`
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  ${(props) =>
    props.primoStep &&
    css`
      & > div:first-child {
        transition: all 2s;
        transform: translateY(-40%);
        backface-visibility: hidden;
      }
    `}
`;

const Scrollabile = styled.div`
  position: relative;
  height: 700vh;
  width: 100%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }
`;

const P = styled.p`
  margin-top: 5rem;
  height: 0;
  font-style: italic;
  text-align: center;
  line-height: 30px;
  color: var(--color-grey-500);

  & span {
    color: var(--color-gold);
    font-weight: 700;
    font-size: 2rem;
    font-family: "syncopate" sans-serif;
    font-style: normal;
  }
  ${(props) =>
    props.primoStep &&
    css`
      height: calc(((var(--scroll)) - 0.125) * 30vh);
    `}

  ${(props) =>
    props.type === "secondoCapitolo" &&
    css`
      ${(props) =>
        props.secondoStep &&
        css`
          height: calc(((var(--scroll)) - 0.5) * 30vh);
        `}
      ${(props) =>
        props.terzoStep &&
        css`
          animation: allontanati 0.5s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * 1.5 * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes allontanati {
            to {
              transform: translateY(50%);
            }
          }
        `}
    `}
`;

const ContainerCapitoli = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  width: 100%;
  margin: 0 auto;
  /* background-color: blue; */

  ${(props) =>
    props.primoStep &&
    css`
      animation: reveal 0.5s linear infinite;
      animation-play-state: paused;
      animation-delay: calc((var(--scroll) - 0.125) * 1.5 * -1s);
      animation-iteration-count: 1;
      animation-fill-mode: both;

      transform: translateX(-100%);
      opacity: 0;

      @keyframes reveal {
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}
`;

const ContainerCapitoloSingolo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: -5rem;
  ${(props) =>
    props.type === "primo" &&
    css`
      ${(props) =>
        props.terzoStep &&
        css`
          animation: indietro 0.3s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * 1.2 * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes indietro {
            to {
              transform: translateX(-100%);
              opacity: 0;
            }
          }
        `}
    `}

  ${(props) =>
    props.type === "secondoCapitolo" &&
    css`
      opacity: 0;
      ${(props) =>
        props.secondoStep &&
        css`
          animation: rivelati 0.3s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.5) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes rivelati {
            to {
              opacity: 1;
            }
          }
        `}
      ${(props) =>
        props.terzoStep &&
        css`
          animation: finale 0.2s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes finale {
            0% {
              opacity: 1;
            }
            to {
              transform: translateX(-50%) translateY(10%);
              opacity: 1;

              /* font-size: 1.3rem; */
            }
          }
        `}
    `}
`;

const FotoCapitoloPrimo = styled.div`
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
  width: 100dvw;
  transition: all 1s ease;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    height: 40vh;
  }
  @media only screen and (min-width: 1201px) {
    width: 100%;
    height: 60vh;
  }
  height: 60vh;

  ${(props) =>
    props.type !== "seconda" &&
    css`
      &:hover {
        transition: all 1s ease;
        transform: scale(1.1);
      }
    `}

  ${(props) =>
    props.type === "seconda" &&
    css`
      ${(props) =>
        props.terzoStep &&
        css`
          animation: scale 0.2s linear infinite;
          animation-play-state: paused;
          animation-delay: calc((var(--scroll) - 0.75) * -1s);
          animation-iteration-count: 1;
          animation-fill-mode: both;

          @keyframes scale {
            to {
              transform: scale(1.2);
            }
          }
        `}
    `}
`;

const IMG = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
`;

// PER MOBILE
const ContainerTuttoMobile = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
`;

const FotoMobile = styled.img`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;
const ScrittaMobile = styled.p`
  & span {
    color: var(--color-gold);
    font-weight: 700;
    font-size: 1.8rem;
    font-family: "syncopate" sans-serif;
  }
  padding: 10%;
  text-align: center;
  line-height: 30px;
  color: var(--color-grey-500);
`;

function Storia() {
  const containerRef = useRef(null);
  const [divTop, setDivTop] = useState(0);
  const [primoStep, setPrimoStep] = useState(false);
  const [secondoStep, setSecondoStep] = useState(false);
  const [terzoStep, setTerzoStep] = useState(false);
  const [quartoStep, setQuartoStep] = useState(false);

  const [screen, setScreen] = useState(() =>
    window.innerWidth > 768 ? "large" : "small"
  );

  useEffect(() => {
    const calculateDivTop = () => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDivTop(rect.top + window.scrollY);
      }
      if (window.innerWidth > 768) {
        setScreen("large");
      } else {
        setScreen("small");
      }
    };

    calculateDivTop();

    window.addEventListener("resize", calculateDivTop);

    return () => window.removeEventListener("resize", calculateDivTop);
  }, []);

  useEffect(() => {
    const FnScroll = () => {
      const scrollValue =
        window.scrollY >= divTop - window.innerHeight
          ? (window.scrollY - divTop + window.innerHeight) /
              containerRef?.current?.offsetHeight >=
            1
            ? 1
            : (window.scrollY - divTop + window.innerHeight) /
              containerRef?.current?.offsetHeight
          : 0;
      scrollValue >= 0.125 ? setPrimoStep(true) : setPrimoStep(false);
      scrollValue >= 0.5 ? setSecondoStep(true) : setSecondoStep(false);
      scrollValue >= 0.75 ? setTerzoStep(true) : setTerzoStep(false);
      scrollValue >= 0.95 ? setQuartoStep(true) : setQuartoStep(false);
      document.body.style.setProperty("--scroll", scrollValue);
    };

    window.addEventListener("scroll", FnScroll, false);

    return () => window.removeEventListener("scroll", FnScroll, false);
  }, [divTop]);

  return (
    <>
      {screen === "large" && (
        <Scrollabile ref={containerRef}>
          <DivFix primoStep={primoStep}>
            <ScrittaCorpoPagina type="storia" terzoStep={terzoStep}>
              <H2>Come ci siamo arrivati...</H2>
            </ScrittaCorpoPagina>
            <ContainerCapitoli primoStep={primoStep}>
              <ContainerCapitoloSingolo type="primo" terzoStep={terzoStep}>
                <FotoCapitoloPrimo>
                  <IMG src="/img/2001.jpeg" alt="Foto 2001"></IMG>
                </FotoCapitoloPrimo>
                <P primoStep={primoStep}>
                  <span>2001</span> Ludwig nasce dal sogno della fondatrice
                  Daniela, che dopo anni di esperienza in una grossa compagnia
                  del settore, decise di creare il proprio salone. Un luogo in
                  cui, insieme al suo team, accogliere ed esprimere il proprio
                  amore verso i capelli, facendo sentire a casa ogni cliente.
                </P>
              </ContainerCapitoloSingolo>
              <ContainerCapitoloSingolo
                type="secondoCapitolo"
                secondoStep={secondoStep}
                terzoStep={terzoStep}
                quartoStep={quartoStep}
              >
                <FotoCapitoloPrimo type="seconda" terzoStep={terzoStep}>
                  <IMG src="/img/2001.jpeg" alt="Foto 2024"></IMG>
                </FotoCapitoloPrimo>
                <P
                  type="secondoCapitolo"
                  secondoStep={secondoStep}
                  terzoStep={terzoStep}
                >
                  <span>2024</span> Dopo 23 anni, e con l’ingresso dei figli
                  nell’attività, Ludwig decide di rinnovare per offrire un
                  servizio ancora più esclusivo e di alta qualità. Per incantare
                  chiunque varchi la soglia e consolidarsi punto di riferimento
                  per tutti coloro che amano la bellezza dei propri capelli.
                </P>
              </ContainerCapitoloSingolo>
            </ContainerCapitoli>
          </DivFix>
        </Scrollabile>
      )}
      {screen === "small" && (
        <ContainerTuttoMobile>
          <ScrittaCorpoPagina type="storia">
            <H2 type="storia">Come ci siamo arrivati...</H2>
          </ScrittaCorpoPagina>
          <ContainerFotoMobile>
            <FotoMobile src="/img/2001.jpeg"></FotoMobile>
            <ScrittaMobile>
              <span>2001</span> Ludwig nasce dal sogno della fondatrice Daniela,
              che dopo anni di esperienza in una grossa compagnia del settore,
              decise di creare il proprio salone. Un luogo in cui, insieme al
              suo team, accogliere ed esprimere il proprio amore verso i
              capelli, facendo sentire a casa ogni cliente.
            </ScrittaMobile>
          </ContainerFotoMobile>
          <ContainerFotoMobile>
            <FotoMobile src="/img/2001.jpeg"></FotoMobile>
            <ScrittaMobile>
              <span>2024</span> Dopo 23 anni, e con l’ingresso dei figli
              nell’attività, Ludwig decide di rinnovare per offrire un servizio
              ancora più esclusivo e di alta qualità. Per incantare chiunque
              varchi la soglia e consolidarsi punto di riferimento per tutti
              coloro che amano la bellezza dei propri capelli.
            </ScrittaMobile>
          </ContainerFotoMobile>
        </ContainerTuttoMobile>
      )}
    </>
  );
}

export default Storia;
