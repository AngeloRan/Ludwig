import styled from "styled-components";
import RowMenuPagina from "../ui/RowMenuPagina";

const StyledMenuPagina = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function MenuPagina() {
  return (
    <StyledMenuPagina>
      <RowMenuPagina>
        <img src="../public/img/servizi.png" alt="ser" />
      </RowMenuPagina>
    </StyledMenuPagina>
  );
}

export default MenuPagina;
