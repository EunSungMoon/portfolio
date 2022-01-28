import './Aboutme.scss';
import { BsCaretDownFill } from "react-icons/bs";

export default function Aboutme() {
  return (
    <section id='aboutme'>
      <div className='container'>
        <h1>안녕하세요 문은성입니다. <br />
          뭔가 텍스트를 넣고싶은데 오글 거려서 못넣겠다..
        </h1>
        <button>더 알아보기 <BsCaretDownFill /></button>
      </div>
    </section>
  )
}