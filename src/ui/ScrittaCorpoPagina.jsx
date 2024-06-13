import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledScrittaCorpoPagina = styled.div`
  opacity: 0;
  transform: translateX(-60%);
  ${(props) =>
    props.type === "noview" &&
    css`
      transform: translateX(0);
    `}
  transition: all 1.2s;
  text-align: center;
  & p {
    letter-spacing: 1px;
    line-height: 30px;
  }

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  padding: 4rem 3rem 0 3rem;
  margin-top: 1rem;

  ${(props) =>
    props.type === "servizi" &&
    css`
      @media only screen and (min-width: 768px) {
        line-height: 30px;
        padding-top: 0px;
        margin-top: 0;
      }
    `}

  ${(props) =>
    props.type === "nospace" &&
    css`
      padding: 0;
    `}
  & p:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${(props) =>
    props.type === "storia" &&
    css`
      transform: translateX(0);
    `}

  ${(props) =>
    props?.terzoStep &&
    css`
      opacity: 0;
    `}
`;

function ScrittaCorpoPagina({ children, type, terzoStep }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `100px 0px`,
  });

  return (
    <StyledScrittaCorpoPagina
      ref={ref}
      inView={inView}
      type={type}
      terzoStep={terzoStep}
    >
      {children}
    </StyledScrittaCorpoPagina>
  );
}

export default ScrittaCorpoPagina;
