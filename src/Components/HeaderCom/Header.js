import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';

export default function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollHeader = () => {
    setScrollPosition(window.scrollY|| document.documentElement.scrollTop)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScrollHeader)
  })


  return (
    <header id="header" className={`nav-wrapper fixed-top navbar navbar-togglealbe-sm navbar-expand-md ${scrollPosition? 'headerScroll' : ''}`}>
      <div className="container">
        <Navbar className='w-100' collapseOnSelect expand='lg' >
          <Navbar.Brand href='/'>
            <h1 className='logo'>Moon's Portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='nav-justified w-100 nav-fill nav-name'>
              <Nav.Link href='/'>About me</Nav.Link>
              <Nav.Link href='/'>Skills</Nav.Link>
              <Nav.Link href='/'>Project</Nav.Link>
              <Nav.Link href='/'>Timeline</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}