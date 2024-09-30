import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Experience() {
  return (
    <>
     <Container className="my-5">
      <h2 className='mt-5 mb-5 text-center'>Experience</h2>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card className="mb-4 h-100">
            <Card.Body>
              <h4>MERN Stack Intern</h4>
              <p>Developed web applications using the MERN stack and improved overall user experience.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container> 
    </>
  )
}

export default Experience
