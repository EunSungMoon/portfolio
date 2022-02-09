import './Footer.scss';
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <footer id="footer">
      <div className='footerWrap container'>
        <div className='gitIcon'>
          <a href='https://github.com/EunSungMoon' target='blank'>
            <BsGithub className='git' />
          </a>
        </div>
        <p>Copyright 2022. Moon Eunsung all rights reserved.</p>
      </div>
    </footer>
  )
}