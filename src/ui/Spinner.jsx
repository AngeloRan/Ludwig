import styled from "styled-components";

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinnero = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, var(--color-gold));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: rotate 1.5s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <Spinnero />
    </SpinnerContainer>
  );
}

export default Spinner;
