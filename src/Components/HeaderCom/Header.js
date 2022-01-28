import { useState, useEffect } from 'react';
import './Header.scss';
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [hambuger, setHamburger] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleHamburger = e => {
    setHamburger(!hambuger)
  }

  const handleScrollHeader = () => {
    setScrollPosition(window.scrollY|| document.documentElement.scrollTop)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScrollHeader)
  })

  return (
    <header id="header" className={`header ${scrollPosition ? 'headerScoll' : ''}`}>
      <div className="headerInner container">
        <div className='h1'>Moon's Portfolio</div>
        <nav>
          <ol className={`tabName ${hambuger ? '' : 'active'}`}>
            <li>About me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Timeline</li>
          </ol>
          <div className='hamburger' onClick={handleHamburger}>
            <HiMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}