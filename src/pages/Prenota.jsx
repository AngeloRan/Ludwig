import styled from "styled-components";
import VideoFotoIniziale from "../ui/VideoFotoIniziale";
import H2 from "../ui/H2";
import { PiDownload } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import Footer from "../ui/Footer";

const DivPrenotazioni = styled.div`
  padding-bottom: 7rem;
  width: 100%;
  text-align: center;
`;

const DivPrenotazioniModalita = styled.div`
  font-size: 1.8rem;
  margin-top: 8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media only screen and (min-width: 1201px) {
    flex-direction: row;
    margin-top: 5rem;
  }
  & a {
    transition: all 1s;
    display: block;
    position: relative;

    &:hover span:first-child {
      color: var(--color-gold);
    }
    & span:first-child {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 10px;
    }
  }
`;

const DivisorePrenotazioni = styled.div`
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent 1%,
    var(--color-gold) 50%,
    transparent 99%
  );
  @media only screen and (min-width: 1201px) {
    width: 1px;
    height: 10rem;
    background-image: linear-gradient(
      to bottom,
      transparent 1%,
      var(--color-gold) 50%,
      transparent 99%
    );
  }
`;

const StyledWa = styled(FaWhatsapp)`
  font-size: 2rem;
`;
const StyledPi = styled(PiDownload)`
  font-size: 2rem;
`;

const ContenitoreAllineamentoIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:nth-child(2) {
    color: var(--color-gold);
  }
`;

const Mappa = styled.div`
  height: 40vh;
  @media only screen and (min-width: 768px) {
    height: 60vh;
  }
  border-top: 2px solid var(--color-gold);
  border-bottom: 2px solid var(--color-gold);
`;

function Contatti() {
  const Mappagrigia = { height: "100%" };

  return (
    <>
      <VideoFotoIniziale tipo="foto" src="./img/imgsfondocontatti.png" />
      <DivPrenotazioni>
        <H2 type="prenotazioni">Prenotazioni</H2>
        <DivPrenotazioniModalita>
          <a href="tel:+3901190155465">
            <ContenitoreAllineamentoIcone>
              <span>Telefono:</span>
              <span>+ 39 011 90 15 465</span>
            </ContenitoreAllineamentoIcone>
          </a>
          <DivisorePrenotazioni />
          <a href="https://www.emisfero-beauty.it/makiapp/">
            <ContenitoreAllineamentoIcone>
              <span>Scarica l'App:</span>
              <StyledPi />
            </ContenitoreAllineamentoIcone>
          </a>
          <DivisorePrenotazioni />
          <a href="https://wa.me/+393661574143">
            <ContenitoreAllineamentoIcone>
              <span>Consulenza gratuita:</span>

              <StyledWa />
            </ContenitoreAllineamentoIcone>
          </a>
        </DivPrenotazioniModalita>
      </DivPrenotazioni>
      <Mappa>
        <MapContainer
          style={Mappagrigia}
          center={[45.00387, 7.53668]}
          zoom={17}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <ZoomControl position="topright" />
          <Marker
            position={[45.00387, 7.53668]}
            style={{ backgroundColor: "red" }}
          >
            <Popup style={{ fontSize: "3rem" }}>
              Ludwig Hair Couture. <br /> Str. Volvera, 9, 10043 Orbassano TO
            </Popup>
          </Marker>
        </MapContainer>
      </Mappa>
      <Footer page="contatti" />
    </>
  );
}

export default Contatti;
