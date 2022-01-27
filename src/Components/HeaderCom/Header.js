import { useState } from 'react';
import './Header.scss';
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [hambuger, setHamburger] = useState(true)

  const handleHamburger = e => {
    console.log(e.target)
    console.log(hambuger)
    setHamburger(!hambuger)
  }

  return (
    <header id="header">
      <div className="headerInner container">
        <h1 className='h1'>Moon's Portfolio</h1>
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