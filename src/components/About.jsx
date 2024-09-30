import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
  return (
    <>
     <Container  className="my-5">
      <Row style={{marginTop: '100px'}} className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2>About Me</h2>
              <p>
                I am Rohith Sekhar N, a MERN stack intern with experience in developing modern web applications. 
                I specialize in building responsive, fast, and interactive web applications using 
                MongoDB, Express, React, and Node.js.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
    </>
  )
}

export default About

