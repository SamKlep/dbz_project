import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar bg='white' expand='lg'>
        <Navbar.Brand href='/'>
          <Image src='img/dbz-logo.png' alt='dbz logo' border='0' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ml-auto '>
          <Link
            className='header-links text-decoration-none'
            to='/characters'>
            <Nav.Item>
              <h5 className='links-font p-1'>Characters</h5>
            </Nav.Item>
          </Link>
          <Link
            className='header-links text-decoration-none'
            to='/episodes'>
            <Nav.Item>
              <h5 className='links-font p-1'>Episodes</h5>
            </Nav.Item>
          </Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
