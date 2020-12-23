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

        <Nav className='ml-auto '>
          <Link
            className='p-2 header-links text-decoration-none'
            to='/characters'>
            <Nav.Item>
              <h5 className='links-font'>Characters</h5>
            </Nav.Item>
          </Link>
          <Link
            className='p-2 header-links text-decoration-none'
            to='/episodes'>
            <Nav.Item>
              <h5 className='links-font'>Episodes</h5>
            </Nav.Item>
          </Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
