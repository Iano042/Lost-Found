import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
// import "Style.css";

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">FoundIt Hub</Navbar.Brand>
          <Nav className="d-flex justify-content-center ms-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Items">
              Find Items
            </Nav.Link>
            <Nav.Link as={Link} to="/postItem">
              Post Item
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
