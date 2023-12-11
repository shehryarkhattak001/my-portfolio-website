import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary h-10vh">
      <Container className={styles.navContainer}>
        <Navbar.Brand className={`${styles.heading}`} href="#home">
          SHERY
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-5">
            <Nav.Link href="/" className="">
              Home
            </Nav.Link>
            <Nav.Link href="/portfolio" className="">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#link" className="">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
