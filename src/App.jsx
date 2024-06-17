import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";
import PageNotFound from "./pages/PageNotFound";

const Home = lazy(() => import("./pages/Home"));
const Menuservizi = lazy(() => import("./pages/Menuservizi"));
const Galleria = lazy(() => import("./pages/Galleria"));
// const Contatti = lazy(() => import("./pages/Prenota"));
const Prenota = lazy(() => import("./pages/Prenota"));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="menuservizi" element={<Menuservizi />} />
              <Route path="galleria" element={<Galleria />} />
              <Route path="prenota" element={<Prenota />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
