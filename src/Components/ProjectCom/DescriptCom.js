import Carousel from 'react-bootstrap/Carousel'

export default function DescriptCom(props) {
  return (
    <>
      <div className='projectTitle'>
        <h2>{props.projectTitle}</h2>
        <p>{props.projectPeriod}</p>
      </div>
      <div className='projectContent'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className='projectImg' src={props.img1} alt='' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='projectImg' src={props.img2} alt='' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='projectImg' src={props.img3} alt='' />
          </Carousel.Item>
        </Carousel>
        <div className='projectDescript'>
          <div className='projectMainDescript'>
            <p>
              {props.mainDescript1}
            </p>
            <p>
              {props.mainDescript2}
            </p>
          </div>
          <div className='projectSkillDescript'>
            <div className='descriptWrapper'>
              <div className='projectLabel'>주요기능</div>
              <span className='projectValue'>{props.mainService}</span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>Github</div>
              <span className='projectValue'>
                <a href={`https://${props.gitAddress}`} target='blank'>{props.gitAddress}</a>
              </span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>도메인</div>
              <span className='projectValue'>{props.domain}</span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>Front-end</div>
              <span className='projectValue'>{props.front}</span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>Back-end</div>
              <span className='projectValue'>{props.back}</span>
            </div>

            <div className='descriptWrapper'>
              <div className='projectLabel'>Deployment</div>
              <span className='projectValue'>{props.deployment}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}