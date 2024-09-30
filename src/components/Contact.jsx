import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <>
      <Container className="my-5">
      <h2 className='text-center'>Contact Me</h2>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 align-item-center">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
    </>
  )
}

export default Contact

