import styled from "styled-components";

const ContainerVideo = styled.div`
  height: 70dvh;
  @media only screen and (min-width: 768px) {
    height: 100dvh;
  }
  width: 100%;
  /* background-color: red; */
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: brightness(95%); */
`;

function Menuservizi() {
  return (
    <>
      <ContainerVideo>
        <Video autoPlay muted loop>
          <source src="../../public/menuservizi.mp4" type="video/mp4" />
          Your browser is not supported
        </Video>
      </ContainerVideo>
    </>
  );
}

export default Menuservizi;
