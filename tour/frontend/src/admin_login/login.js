import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class login extends Component {
  render() {
    return (
      <div>
           {/* ----------------------------------Form starts here----------------------------------- */}
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              {/* -----------------------------------Username---------------------------------------- */}
            <Form.Label column sm="2">
              Username:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Username" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
              {/* -----------------------------------Password------------------------------------------- */}
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <>
        {/* -------------------------------------------button lies here----------------------------------- */}
          <Button variant="dark" size="lg" /* onClick={()=>Packagename() */  >Login</Button>{" "}
        </>
      </div>
    );
  }
}
