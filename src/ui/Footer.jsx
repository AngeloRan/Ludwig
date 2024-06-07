import styled, { css } from "styled-components";
import BtnPrenotazione from "./BtnPrenotazione";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  width: 100%;
  background-color: var(--color-grey-100);
  margin-bottom: 7rem;
  ${(props) =>
    (props.page =
      "menuservizi" &&
      css`
        margin-top: 10rem;
        @media only screen and (min-width: 768px) {
          margin-top: 15rem;
        }
      `)}
  @media only screen and (min-width: 1400px) {
    height: auto;
    margin-bottom: 0;
    flex-direction: row;
    padding-top: 3%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 3%;
    justify-content: center;
    gap: 10%;
  }
  position: relative;
  padding: 15% 15% 10%;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-left: 30%;
    padding-right: 14%;
  }
  @media only screen and (min-width: 1201px) {
    padding-left: 20%;
    padding-right: 14%;
  }
`;

const RowFooter = styled.div`
  text-align: center;
  & h5 {
    margin-bottom: 1rem;
  }
  & p {
    color: var(--color-grey-500);
    font-size: 1.3rem;
    letter-spacing: 2px;
    padding-bottom: 5px;

    & span {
      margin-left: 5px;
    }
  }
`;

const H5 = styled.h5`
  font-family: "syncopate", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-gold);
  font-size: 1.4rem;
`;

const Pcontatti = styled.p`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  /* gap: 1rem; */
`;

const StyledFaInstagram = styled(FaInstagram)`
  font-size: 2.5rem;
  color: var(--color-gold);
`;

const StyledFaFacebook = styled(FaFacebook)`
  font-size: 2.5rem;
  color: var(--color-gold);
`;

const StyledFaWhatsapp = styled(FaWhatsapp)`
  font-size: 2.5rem;
  color: var(--color-gold);
`;

function Footer({ page }) {
  return (
    <StyledFooter page={page}>
      {/* <RowFooter>
        <BtnPrenotazione type="Foot" />
      </RowFooter> */}
      <RowFooter>
        <H5>Dove siamo</H5>
        <p>Str. Volvera, 9, </p>
        <p>10043 Orbassano TO</p>
      </RowFooter>
      <RowFooter>
        <H5>Orari di apertura</H5>
        <p>
          Martedì-Sabato <span>9:00/18:30</span>
        </p>

        <p>
          Mercoledì <span>12:00/21:00</span>
        </p>

        <p>Domenica e Lunedì chiuso</p>
      </RowFooter>
      <RowFooter>
        <H5>Contatti</H5>
        <p>
          <a href="tel:+3901190155465">
            Telefono: <span>+ 39 011 90 15 465</span>
          </a>
        </p>
        <p>
          <a href="https://wa.me/+393661574143">
            Whatsapp: <span>+393661574143</span>
          </a>
        </p>
        <p>
          <a href="mailto:hairludwig02@gmail.com">
            E-mail: <span>hairludwig02@gmail.com</span>
          </a>
        </p>
        <Pcontatti>
          <a href="https://www.instagram.com/marcedduandreahair?igsh=MTR1MTY2dmRtczU1Mw%3D%3D&utm_source=qr">
            <StyledFaInstagram />
          </a>
          <a href="https://www.facebook.com/share/f71PvBWwBvpyU387/?mibextid=LQQJ4d">
            <StyledFaFacebook />
          </a>
          <a href="https://wa.me/+393661574143">
            <StyledFaWhatsapp />
          </a>
        </Pcontatti>
      </RowFooter>
    </StyledFooter>
  );
}
export default Footer;
