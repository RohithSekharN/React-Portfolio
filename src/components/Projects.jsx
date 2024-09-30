import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Projects() {
  return (
    <>
      <Container className="my-5">
      <h2 className='mt-5 mb-5 text-center'>Projects</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Body>
              <h4>Bank Website</h4>
              <p>A modern banking web application with features like user login, transactions, and balance display.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Body>
              <h4>BMI Calculator</h4>
              <p>An interactive BMI calculator with user input validations and real-time results.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Projects
