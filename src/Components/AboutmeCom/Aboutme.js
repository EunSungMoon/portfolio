import './Aboutme.scss';
import { BsCaretDownFill } from "react-icons/bs";
import { Link } from 'react-scroll';


export default function Aboutme() {
  return (
    <section id='aboutme'>
      <div className='container aboutmeWrap'>
        <h1 className='h1'>안녕하세요.<br />웹 개발자 문은성입니다. <br />
          뭔가 텍스트를 넣고싶은데 오글 거려서 못넣겠다..
        </h1>
        <Link
          to='skills'
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <button className='moreBtn'>
            더 알아보기 <BsCaretDownFill />
          </button>
        </Link>
      </div>
    </section>
  )
}