import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import data from '../../data/data.json'

export default function Project() {
  console.log(data.project)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>




        {data.project.map(d => (
          <div className='projectInfo' key={d.id}>
            <div className='projectTitle' >
              <h2>{d.title}</h2>
              <p>{d.period}</p>
            </div>
            <div className='projectImg'>
              <Slider {...settings}>
                <div>
                  <img className='projectImg' src={`./img/friends_${d.img1}.png`} alt='' />
                </div>
              </Slider>
            </div>
            <div className='projectDescript'>
              <div className='projectMainDescript'>
                <p>
                  {d.mainDescript}
                </p>
                <p>
                  {d.subDescript}
                </p>
              </div>
              <div className='projectSkillDescript'>
                <div className='descriptWrapper'>
                  <div className='projectLabel'>주요기능</div>
                  <span className='projectValue'>{d.service}</span>
                </div>

                <div className='descriptWrapper'>
                  <div className='projectLabel'>Github</div>
                  <span className='projectValue'>
                    <a href={`https://${d.gitAddress}`} target='blank'>{d.gitAddress}</a>
                  </span>
                </div>

                <div className='descriptWrapper'>
                  <div className='projectLabel'>도메인</div>
                  <span className='projectValue'>{d.domain}</span>
                </div>

                <div className='descriptWrapper'>
                  <div className='projectLabel'>Front-end</div>
                  <span className='projectValue'>{d.front}</span>
                </div>

                <div className='descriptWrapper'>
                  <div className='projectLabel'>Back-end</div>
                  <span className='projectValue'>{d.back}</span>
                </div>

                <div className='descriptWrapper'>
                  <div className='projectLabel'>Deployment</div>
                  <span className='projectValue'>{d.deployment}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
} 