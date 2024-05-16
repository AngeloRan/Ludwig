import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledPicture = styled.picture`
  transition: all 1s;
  opacity: 0;
  transform: translateX(-100%);
  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

function RowMenuPagina({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <StyledPicture ref={ref} inView={inView}>
      {children}
    </StyledPicture>
  );
}

export default RowMenuPagina;
