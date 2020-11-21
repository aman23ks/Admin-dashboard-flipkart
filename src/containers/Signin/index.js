import React from "react";
import Layout from "../../components/layout";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/input";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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

export default Signin;
