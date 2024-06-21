import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import BtnPrenotazione from "../features/MenuHeader/BtnPrenotazione";
import ArrowTopPage from "../features/MenuHeader/ArrowTopPage";
import { useEffect, useState } from "react";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  width: 100%;
`;

const BtnPrenota = styled.div`
  cursor: pointer;
  z-index: 5001;
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function scrollIntoTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <StyledAppLayout>
      <Header open={open} setOpen={setOpen}></Header>
      <Main>
        <Outlet />
      </Main>
      <Link to="prenota" onClick={() => setOpen(false)}>
        <BtnPrenota>
          <BtnPrenotazione />
        </BtnPrenota>
      </Link>
      <ArrowTopPage onScrollIntoTop={scrollIntoTop} />
    </StyledAppLayout>
  );
}

export default AppLayout;
