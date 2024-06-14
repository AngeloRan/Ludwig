import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const videoRef = useRef();

  function preloadVideo(src) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.oncanplaythrough = () => resolve();
      video.onerror = () => reject();
      video.src = src;
    });
  }

  useEffect(() => {
    let isMounted = true;

    preloadVideo(props.src)
      .then(() => {
        if (isMounted) {
          setLoadedSrc(props.src);
          setIsLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Error loading video", error);
      });

    // Cleanup flag on component unmount
    return () => {
      isMounted = false;
    };
  }, [props.src]);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const videoElement = videoRef?.current;
  //   if (videoElement) {
  //     videoElement.addEventListener("loadeddata", (e) => {
  //       // setIsLoaded(true);
  //       console.log("Video caricato correttamente");
  //       videoElement.muted = true; // Assicurati che il video sia silenziato
  //       videoElement.play().catch((error) => {
  //         console.error("Errore nella riproduzione del video:", error);
  //       });
  //     });
  //   }
  // }, []);

  return (
    <ContainerVideo>
      {props.tipo === "video" && isLoaded ? (
        <Video ref={videoRef} autoPlay loop muted playsInline>
          <source src={loadedSrc} type={props.type} />
          Your browser is not supported
        </Video>
      ) : props.tipo === "video" ? (
        <Spinner />
      ) : null}
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
