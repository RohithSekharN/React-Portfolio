import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

function Skills() {
  return (
    <>
      <Container className="my-5">
      <h2 className='mt-5 mb-5 text-center'>Skills</h2>
      <Row>
        <Col md={6}>
          <p>React</p>
          <ProgressBar now={85}/>
        </Col>
        <Col md={6}>
          <p>Node.js</p>
          <ProgressBar now={80}/>
        </Col>
        <Col md={6}>
          <p className='mt-5'>MongoDB</p>
          <ProgressBar now={75}/>
        </Col>
        <Col md={6}>
          <p className='mt-5'>Express</p>
          <ProgressBar now={70}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Skills
