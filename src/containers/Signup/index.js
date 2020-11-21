import React from "react";
import Layout from "../../components/layout";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/input";
/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>

                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>

                <Form.Group controlId="formBasicEmail">
                  <Input
                    label="Email"
                    placeholder="Email"
                    value=""
                    type="email"
                    onChange={() => {}}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Input
                    label="Password"
                    placeholder="Password"
                    value=""
                    type="password"
                    onChange={() => {}}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Signup;
