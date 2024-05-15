import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 70%;
  @media only screen and (min-width: 768px) {
    height: 100%;
  }
`;

const VideoEl = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  animation-name: Show-video;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  @keyframes Show-video {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContainerMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    padding: 0 4%;
    @media only screen and (min-width: 768px) {
      padding-left: 20%;
      padding-right: 14%;
    }
  }
`;

function Home() {
  return (
    <>
      <VideoContainer>
        <VideoEl autoPlay muted loop>
          <source src="../public/barbiere.mp4" type="video/mp4" />
          Your browser is not supported!
        </VideoEl>
      </VideoContainer>
      <ContainerMenu>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint quis
          voluptatibus consectetur esse saepe, culpa voluptas placeat, beatae
          iusto ullam neque perspiciatis repellat magni laudantium. Quidem eos
          corrupti autem quam quaerat fugit libero culpa modi quo voluptatum
          distinctio eum, labore iure sed consequatur sunt repellendus quae fuga
          quibusdam similique.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nesciunt in recusandae, amet hic, blanditiis sequi repellendus
          similique esse commodi earum optio adipisci aspernatur voluptatum
          autem totam odio placeat distinctio quis vel praesentium facere illum
          velit inventore. Quo amet mollitia molestias labore obcaecati
          inventore explicabo soluta iure, et assumenda itaque a illum placeat
          rem repellendus sunt odit velit quos porro voluptatibus ipsa facilis!
          Excepturi mollitia libero consequuntur harum magni odio! Beatae
          dignissimos consequatur tenetur! Neque sequi sit iste non cupiditate
          asperiores vel provident ex qui nisi, dicta obcaecati voluptatum ad ea
          quaerat architecto eius magnam iure nulla repellendus cumque nihil?
        </div>
        <div>ciao</div>
      </ContainerMenu>
    </>
  );
}

export default Home;
