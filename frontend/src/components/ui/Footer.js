import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='align-items-center'>
      <Nav className='footer justify-content-center' activeKey='/characters'>
        <Nav.Item>
          <Nav.Link href='/characters'>Characters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/episodes'>Episodes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Footer
