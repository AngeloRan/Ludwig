import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledMenu = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  height: 0;

  /* display: none; */
  ${(props) => {
    return (
      props.open &&
      css`
        /* display: block; */
        transition: all 0.5s;
        opacity: 1;
        height: auto;
        @media only screen and (min-width: 768px) {
          width: auto;
        }
      `
    );
  }}
`;
const Lista = styled.ul`
  height: 0;
  overflow: hidden;
  font-weight: 200;
  letter-spacing: 5px;
  color: transparent;
  font-size: 2rem;
  text-transform: uppercase;
  opacity: 0;
  transition: all 1s;
  ${(props) =>
    props.open &&
    css`
      height: auto;
      opacity: 1;
    `}
  & li {
    margin-bottom: 4rem;
    text-align: center;
    color: var(--color-gold-lighter);
    background-clip: text;
    transition: all 0.3s;

    &:hover {
      color: var(--color-gold);
    }
  }
`;

function Menu({ open, onOpen }) {
  return (
    <StyledMenu open={open}>
      <Lista open={open}>
        <li>
          <NavLink to="/" onClick={onOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menuservizi" onClick={onOpen}>
            Menu' Servizi
          </NavLink>
        </li>
        <li>
          <NavLink to="/galleria" onClick={onOpen}>
            Galleria
          </NavLink>
        </li>
        <li>
          <NavLink to="contatti" onClick={onOpen}>
            Contatti{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/prenota" onClick={onOpen}>
            Prenota
          </NavLink>
        </li>
      </Lista>
    </StyledMenu>
  );
}

export default Menu;
