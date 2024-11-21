import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Row className="d-flex justify-content-between align-items-start">
            {/* Contact Information */}
            <Col md={4} className="text-light mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <p>123 Main Street, Cityville, Country</p>
              <p>
                Email:{" "}
                <a href="mailto:info@example.com" className="text-white">
                  info@example.com
                </a>
              </p>
              <p>Phone: +1 (234) 567-8900</p>
            </Col>

            {/* Navigation Links */}
            <Col md={4} className="mb-4 mb-md-0">
              <Nav className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/" className="text-light px-3">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Items" className="text-light px-3">
                  Find Items
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact" className="text-light px-3">
                  Contact
                </Nav.Link>
              </Nav>
            </Col>
          </Row>

          {/* Horizontal Line */}
          <hr className="border-light" />

          {/* Copyright Section */}
          <Row>
            <Col className="text-center text-light">
              <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
