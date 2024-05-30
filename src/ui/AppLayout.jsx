import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import BtnPrenotazione from "./BtnPrenotazione";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const Main = styled.main`
  min-height: 100dvh;
  background-color: var(--color-grey-50);
  width: 100%;
`;

const BtnPrenota = styled.div`
  position: fixed;
  height: 7rem;
  width: 100%;
  bottom: 0;
  left: 0;
  transition: all 0.2s;
  background-color: var(--color-black-transparent);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <BtnPrenota>
        <BtnPrenotazione />
      </BtnPrenota>
    </StyledAppLayout>
  );
}

export default AppLayout;
