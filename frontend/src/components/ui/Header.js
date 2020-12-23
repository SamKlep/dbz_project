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

        <Nav className='ml-auto'>
          <Link className='p-2' to='/characters'>
            <Nav.Item>Characters</Nav.Item>
          </Link>
          <Link className='p-2' to='/episodes'>
            <Nav.Item>Episodes</Nav.Item>
          </Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
