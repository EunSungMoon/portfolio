import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCom(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='projectInfo'>
      <div className='projectTitle' >
        <h2>{props.title}</h2>
        <p>{props.period}</p>
      </div>
      <div className='wrapper'>
        <div className='imgWrap'>
          <Slider {...settings}>
            {props.projectImage.map(i => (
              <div key={i}>
                <img className='projectImg' src={i} alt='img1' />
              </div>
            ))}
          </Slider>
        </div>
        <div className='projectDescript'>
          <div className='projectMainDescript'>
            <p className="bold">{props.mainDescript}</p>
            {props.subDescript}
          </div>
          <div className='projectSkillDescript'>
            <div className='descriptWrapper'>
              <div className='projectLabel'>주요기능</div>
              <span className='projectValue'>{props.service}</span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>Github</div>
              <span className='projectValue'>
                <a href={`https://${props.gitAddress}`} target='blank'>{props.gitAddress}</a>
              </span>
            </div>

            {
              props.domain === '' ? null :
                <div className='descriptWrapper'>
                  <div className='projectLabel'>도메인</div>
                  <span className='projectValue'>
                    <a href={`http://${props.domain}`} target='blank'>{props.domain}</a>
                  </span>
                </div>
            }

            <div className='descriptWrapper'>
              <div className='projectLabel'>Front-end</div>
              <span className='projectValue'>{props.front}</span>
            </div>

            {
              props.back === '' ? null :
                <div className='descriptWrapper'>
                  <div className='projectLabel'>Back-end</div>
                  <span className='projectValue'>{props.back}</span>
                </div>
            }

            {
              props.deployment === '' ? null :
                <div className='descriptWrapper'>
                  <div className='projectLabel'>Deployment</div>
                  <span className='projectValue'>{props.deployment}</span>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}