import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledContainerFotoMobile = styled.div`
  /* height: auto; */
  width: 100%;
  transition: all 1.5s ease;
  transform: translateX(80%);
  opacity: 0;
  margin-top: -3rem;

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

function ContainerFotoMobile({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `-0px 0px`,
  });
  return (
    <StyledContainerFotoMobile ref={ref} inView={inView}>
      {children}
    </StyledContainerFotoMobile>
  );
}

export default ContainerFotoMobile;
