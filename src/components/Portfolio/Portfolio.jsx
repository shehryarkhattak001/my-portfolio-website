import React from "react";
import { Container, Row, Button, Card, Col } from "react-bootstrap";
import "./Portfolio.scss";
import img1 from "../../assets/images/card1.png";
import img2 from "../../assets/images/card2.png";
import img3 from "../../assets/images/card3.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <Row className="pt-3">
          <h3 className="text-primary mt-4 mb-5 text-center" lg={5}>
            Portfolio
          </h3>
        </Row>
      </Container>
      <Container className="mb-3">
        <Row>
          <Col xl="4" lg="4" md="6" className="my-1">
            <Card className="w-15 h-100">
              <Card.Img variant="top" src={img1} />
              <Card.Body className="bg-light">
                <Card.Title>Material .Kit By Sherry</Card.Title>
                <Card.Text>
                  This project made from Html, CSS and JavaScript. A highest
                  demand of clients for this website
                </Card.Text>
                <Button variant="success " className="text-white">
                  <a href="/details" variant="success">
                    Details
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4" lg="4" md="6" className="my-1">
            <Card className="w-15 h-100">
              <Card.Img variant="top" src={img2} />
              <Card.Body className="bg-light">
                <Card.Title>Dev Connector</Card.Title>
                <Card.Text>
                  This project made from purely bootstrap, Since 2020. Recently
                  made for client
                </Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4" lg="4" md="6" className="my-1">
            <Card className="w-15 h-100">
              <Card.Img variant="top" src={img3} />
              <Card.Body variant="success" className="bg-light">
                <Card.Title>Travelly Web</Card.Title>
                <Card.Text>
                  This website is very helpfull for those people who love
                  travelling. They may easily conduct their journey.
                </Card.Text>
                <Button variant="success ">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
