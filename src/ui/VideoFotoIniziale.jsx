import { useEffect } from "react";
import styled from "styled-components";

const ContainerVideo = styled.div`
  height: 70vh;
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
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

const Foto = styled.img`
  width: 100%;
  height: 100%;
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

function VideoFotoIniziale({ children, ...props }) {
  useEffect(() => {
    const videoElement = document.querySelector(".videos");
    if (videoElement) {
      videoElement.addEventListener("loadeddata", () => {
        console.log("Video caricato correttamente");
        videoElement.muted = true; // Assicurati che il video sia silenziato
        videoElement.play().catch((error) => {
          console.error("Errore nella riproduzione del video:", error);
        });
      });
    }
  }, []);

  return (
    <ContainerVideo>
      {props.tipo === "video" && (
        <Video autoPlay loop muted playsInline>
          <source src={props.src} type={props.type} />
          Your browser is not supported
        </Video>
      )}
      {props.tipo === "foto" && <Foto src={props.src}></Foto>}
    </ContainerVideo>
    //   <ContainerVideo
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //       <video
    //         class="videos"
    //         loop
    //         muted
    //         autoplay
    // playsinline
    //       >
    //       <source src="${props.src}" type="video/mp4" />
    //       </video>`,
    //     }}
    //   />
  );
}

export default VideoFotoIniziale;
