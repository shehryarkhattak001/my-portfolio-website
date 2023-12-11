import React from "react";
import img1 from "../../assets/images/shery.jpg";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import Styles from "./Home.module.scss";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className={Styles.back} fluid>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className={Styles.border}></div>
            <div className={`d-flex ${Styles.head}`}>
              <h3 className={Styles.headingStyle}>
                <strong className="text-primary display-1">M</strong>y name is
                Shehryar Khan
                <h5 className={Styles.text}>
                  I am Frontend Web Developer with 3+ years of experience
                  specializing in HTML, CSS, and JavaScript. Passionate about
                  crafting visually appealing and user-friendly websites. My
                  portfolio reflects a fusion of design aesthetics and technical
                  prowess.
                </h5>
              </h3>
            </div>
            <Button className="mt-2 btn-outline-dark text-white">
              Download CV
            </Button>
            <div className={Styles.icons}>
              <img src={github} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
          </Col>
          <Col className={img1}>
            <div>
              <Image className={Styles.overlay} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
