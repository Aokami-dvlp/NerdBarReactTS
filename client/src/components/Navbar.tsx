import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarCocktail = (): JSX.Element => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nerd Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Ordina per" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Categoria</NavDropdown.Item>
              <NavDropdown.Item href="/filtroIngrediente">
                Ingredienti
              </NavDropdown.Item>
              <NavDropdown.Item href="/filtroBicchiere">Bicchiere</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarCocktail