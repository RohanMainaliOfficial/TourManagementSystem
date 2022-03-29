import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  FormLabel,
  Stack,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import "./style.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default class Navbarcomp extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${image2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Tour</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Tour Status</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        {/* ======================================================================================= */}
        <div
          style={{
            position: "fixed",
            right: 34,
            bottom: 34,
          }}
        >
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
              <Tooltip id="button-tooltip" {...props}>
                Add new packages
              </Tooltip>
            )}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </OverlayTrigger>
        </div>
        {/* ======================================================================================================= */}
          <Container>
            <Row>
              <Col md={{ span: 3 }}>
                {/* ======================================================================= */}
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              {/*=======================================================================  */}
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
              <Col md={{ span: 3 }}>
                <Card className="bg-dark text-white">
                  <Card.Img src={image1} alt="Card image" fluid />
                  <Card.ImgOverlay>
                    <Card.Title>Package Details</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <br />
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
