import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import BtnPrenotazione from "./BtnPrenotazione";
import ArrowTopPage from "./ArrowTopPage";
import { useEffect } from "react";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* overflow: hidden; */
`;

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  width: 100%;
  /* overflow: hidden; */
`;

const BtnPrenota = styled.div`
  z-index: 100;
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
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function scrollIntoTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <StyledAppLayout>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <BtnPrenota>
        <BtnPrenotazione />
      </BtnPrenota>
      <ArrowTopPage onScrollIntoTop={scrollIntoTop} />
    </StyledAppLayout>
  );
}

export default AppLayout;
