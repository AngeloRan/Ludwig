import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: var(--color-grey-100);
  margin-bottom: 7rem;
  @media only screen and (min-width: 768px) {
    z-index: 5000;
  }
  position: relative;
  padding: 15% 15% 0%;
`;

const RowFooter = styled.div`
  height: 10rem;
  text-align: center;
`;

const H5 = styled.h5`
  font-family: "syncopate", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-gold);
  font-size: 1.2rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <RowFooter>
        <H5>Dove siamo</H5>
      </RowFooter>
      <RowFooter></RowFooter>
      <RowFooter></RowFooter>
      <RowFooter></RowFooter>
      <RowFooter>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        voluptate obcaecati odit dolores esse, maiores cupiditate quaerat animi
        iste! Eaque ipsam dicta perferendis numquam, tempora eligendi rerum iste
        cupiditate ipsum!
      </RowFooter>
    </StyledFooter>
  );
}
export default Footer;
