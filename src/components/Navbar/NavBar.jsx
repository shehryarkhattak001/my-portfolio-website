import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
// import img from "../../assets/images/1803888.jpg";
function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary h-10vh">
        <Container>
          <Navbar.Brand className={`${styles.heading} `} href="#home">
            SHERY
          </Navbar.Brand>

          <Navbar.Collapse
            className="text-center"
            id="basic-navbar-nav"
          ></Navbar.Collapse>
          <Nav className=" mx-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
