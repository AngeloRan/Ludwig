import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledScrittaCorpoPagina = styled.div`
  opacity: 0;
  transform: translateX(-60%);
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

  padding: 5rem 3rem 0 3rem;

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
