import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
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
  ${(props) =>
    props.loaded &&
    css`
      animation-name: Show-video;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    `}
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
  console.log(isLoaded);
  const videoFotoRef = useRef();

  // function preloadVideo(src) {
  //   return new Promise((resolve, reject) => {
  //     const video = document.createElement("video");
  //     video.oncanplaythrough = () => resolve();
  //     video.onerror = () => reject();
  //     video.src = src;
  //   });
  // }

  // useEffect(() => {
  //   let isMounted = true;

  //   preloadVideo(props.src)
  //     .then(() => {
  //       if (isMounted) {
  //         setLoadedSrc(props.src);
  //         setIsLoaded(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error loading video", error);
  //     });

  //   // Cleanup flag on component unmount
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [props.src]);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoFotoElement = videoFotoRef?.current;

    if (!videoFotoElement) return;

    if (videoFotoElement.hasAttribute("loop")) {
      videoFotoElement.addEventListener("loadeddata", (e) => {
        videoFotoElement.muted = true; // Assicurati che il video sia silenziato
        videoFotoElement
          .play()
          .then(console.log("partito"))
          .catch((error) => {
            console.error("Errore nella riproduzione del video:", error);
          });
        setIsLoaded(true);
      });
    } else {
      videoFotoElement.addEventListener("load", (e) => {
        setIsLoaded(true);
      });
    }
  }, []);

  return (
    <ContainerVideo>
      {props.tipo === "video" && (
        <Video
          loaded={isLoaded}
          ref={videoFotoRef}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={props.src} type={props.type} />
          Your browser is not supported
        </Video>
      )}
      {props.tipo === "foto" && (
        <Foto ref={videoFotoRef} src={props.src}></Foto>
      )}
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
