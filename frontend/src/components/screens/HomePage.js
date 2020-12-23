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
          <Col className='text-center mt-4 mb-5'>
            <h1 className='display-4'>Welcome Super Sayains!</h1>
            <p className='lead mt-3'>
              <strong>Dragon Ball Z</strong> is a Japanese anime television
              series produced by Toei Animation. It is the sequel to Dragon Ball
              and adapts the latter 325 chapters of the original 519-chapter
              Dragon Ball manga series created by Akira Toriyama which ran in
              Weekly Shōnen Jump from 1988 to 1995. Dragon Ball Z aired in Japan
              on Fuji TV from April 1989 to January 1996, before getting dubbed
              in territories including the United States, Canada, Australia,
              Europe, Asia, and Latin America. It was broadcast in at least 81
              countries worldwide. It is part of the Dragon Ball media
              franchise.
            </p>
          </Col>
        </Row>
        <Row className='align-items-lg-center mb-5'>
          <Col>
            <p className='mt-3'>
              <strong>Dragon Ball Z</strong> continues the adventures of Goku,
              who, along with his companions, defend the Earth against villains
              ranging from aliens (Frieza), androids (Cell) and magical
              creatures (Majin Buu). While the original Dragon Ball anime
              followed Goku from childhood to early adulthood, Dragon Ball Z is
              a continuation of his adult life, but at the same time parallels
              the life of his son, Gohan, as well as the development of his
              rival Vegeta.
            </p>
          </Col>
          <Col className='text-center'>
            <Image src='img/goku-front.png' fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
