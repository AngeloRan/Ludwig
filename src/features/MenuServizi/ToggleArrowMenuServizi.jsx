import { useContext } from "react";
import { ServiziContext } from "./ContainerRowMenuServizi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const FrecciaGiu = styled(IoIosArrowDown)`
  /* color: var(--color-grey-400); */
  color: var(--color-gold);
  font-size: 1.5rem;
  transform: translateY(100%);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
    transform: translateY(0);
  }
`;
const FrecciaSu = styled(IoIosArrowUp)`
  color: var(--color-grey-400);
  /* color: var(--color-gold); */
  font-size: 1.5rem;
  transform: translateY(100%);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
    transform: translateY(0);
  }
`;

function ToggleArrowMenuServizi() {
  const { isOpen, onHandleIsOpen } = useContext(ServiziContext);

  return (
    <>
      {isOpen ? (
        <FrecciaSu onClick={onHandleIsOpen} />
      ) : (
        <FrecciaGiu onClick={onHandleIsOpen} />
      )}
    </>
  );
}

export default ToggleArrowMenuServizi;
