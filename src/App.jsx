import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Menuservizi from "./pages/Menuservizi";
import Prenota from "./pages/Prenota";
import Galleria from "./pages/Galleria";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="menuservizi" element={<Menuservizi />} />
            <Route path="galleria" element={<Galleria />} />
            <Route path="contatti" element={<Contatti />} />
            <Route path="prenota" element={<Prenota />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
