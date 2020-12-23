import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col>
            <Image className='mx-auto d-block' src='img/dbz-main.jpeg' fluid />
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <h1 className='display-4'>Welcome Super Sayains!</h1>
            <p className='lead mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              totam id vero accusantium ea ad!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
