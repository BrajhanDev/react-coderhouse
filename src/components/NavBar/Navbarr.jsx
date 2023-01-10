import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logo from '../../images/logo.png'
import { Nav, NavDropdown } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand href="/"> */}
        <Link to='/'>
          <img src={logo} width='150px' alt="" />
        </Link>
        {/* </Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="mx-auto">
            <Link  className="link" to='/category/laptop'>Laptops</Link>
            <Link className="link" to="/category/teclado">Teclados</Link>
            <Link className="link" to="/category/computadora">Computadoras</Link>
            <Link className="link" to="/category/mouse">Mouse</Link>
                       
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
