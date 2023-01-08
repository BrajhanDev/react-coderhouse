import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logo from '../../images/logo.png'
import { Nav, NavDropdown } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";

const Navbarr = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width='150px' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Teclados
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Computadoras</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            <CardWidget />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
