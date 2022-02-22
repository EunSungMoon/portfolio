import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import data from '../../data/data.json'

export default function Project() {
  let settings = {
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
            <div className='wrapper'>
              <div className='imgWrap'>
                <Slider {...settings}>
                  {d.projectImage.map(i => (
                    <div key={i}>
                      <img className='projectImg' src={`/projectImg/${i}.png`} alt='img1' />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className='projectDescript'>
                <div className='projectMainDescript'>
                  <p>
                    {d.mainDescript}
                  </p>
                  <p>
                    {
                      d.highlight === '' ? null : <span className='colorRed'>{d.highlight} </span>
                    }
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

                  {
                    d.domain === '' ? null :
                      <div className='descriptWrapper'>
                        <div className='projectLabel'>도메인</div>
                        <span className='projectValue'>{d.domain}</span>
                      </div>
                  }

                  <div className='descriptWrapper'>
                    <div className='projectLabel'>Front-end</div>
                    <span className='projectValue'>{d.front}</span>
                  </div>

                  {
                    d.back === '' ? null :
                      <div className='descriptWrapper'>
                        <div className='projectLabel'>Back-end</div>
                        <span className='projectValue'>{d.back}</span>
                      </div>
                  }

                  {
                    d.deployment === '' ? null :
                      <div className='descriptWrapper'>
                        <div className='projectLabel'>Deployment</div>
                        <span className='projectValue'>{d.deployment}</span>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 