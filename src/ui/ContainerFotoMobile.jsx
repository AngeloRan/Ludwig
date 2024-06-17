import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledContainerFotoMobile = styled.div`
  /* height: 40vh; */
  width: 50%;
  transition: all 1.5s ease;
  transform: translateX(80%);
  opacity: 0;
  /* margin-top: -3rem; */

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${(props) =>
    props.nofade &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;

function ContainerFotoMobile({ nofade, children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `-0px 0px`,
  });
  return (
    <StyledContainerFotoMobile nofade={nofade} ref={ref} inView={inView}>
      {children}
    </StyledContainerFotoMobile>
  );
}

export default ContainerFotoMobile;
