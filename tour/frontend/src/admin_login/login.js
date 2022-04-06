import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class login extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <>
          <Button variant="dark" size="lg">Login</Button>{" "}
        </>
      </div>
    );
  }
}
