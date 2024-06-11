import styled from "styled-components";

const StyledArrowTopPage = styled.div`
  position: fixed;
  bottom: 7.5rem;
  right: 5%;
  z-index: 5001;
  @media only screen and (min-width: 768px) {
    right: 5rem;
    bottom: 7rem;
  }
  cursor: pointer;
  height: 5rem;
  width: 6rem;
  &::before {
    content: "";
    display: table;
    width: 60%;
    height: 1px;
    background-image: linear-gradient(
      to top right,
      var(--color-gold-light),
      var(--color-gold)
    );
    transform: rotate(-34deg);
    transform-origin: left;
    position: absolute;
    top: 100%;
    left: 0;
  }
  &::after {
    content: "";
    display: table;
    width: 60%;
    height: 1px;
    background-image: linear-gradient(
      to top left,
      var(--color-gold-light),
      var(--color-gold)
    );
    transform: rotate(34deg);
    transform-origin: right;
    position: absolute;
    top: 100%;
    right: 0;
  }
  /* background-color: red; */
`;

function ArrowTopPage({ onScrollIntoTop }) {
  return <StyledArrowTopPage onClick={onScrollIntoTop}></StyledArrowTopPage>;
}

export default ArrowTopPage;
