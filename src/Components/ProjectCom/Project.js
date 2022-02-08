import './Project.scss';
import Carousel from 'react-bootstrap/Carousel'
import boardpage from './img/friends_boardpage.png';
import contentpage from './img/friends_contentpage.png';
import mainpage from './img/friends_mainpage.png'

export default function Project() {
  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>
        <div className='projectInfo'>
          <div className='projectTitle'>
            <h2>프렌즈</h2>
            <p>2021.12-2022.2 (3인 프로젝트)</p>
          </div>

          <article className='projectContent'>
            <Carousel variant="dark">
              <Carousel.Item>
                <img className='projectImg' src={mainpage} alt='' />
              </Carousel.Item>
            </Carousel>
            <div className='projectDescript'>
              <div className='projectMainDescript'>
                <p>
                  기관이나 병원은 봉사자 모집글을 게시하고
                  봉사활동을 원하는 사람들은 게시글을 보고 참여할 수 있다
                  누구나 쉽게 참여하고, 누구나 쉽게 모집할 수 있도록
                  봉사활동의 선순환을 만드는 것이 프렌즈의 목표!
                </p>
                <p>
                  백엔드 개발자, 웹디자이너와 함께 개발한 프로젝트입니다.
                  백엔드 개발자와의 협업으로 API통신 기본원리, http의 작동원리에 대한 개념들을 확실하게 정리할 수 있었습니다.
                  웹 디자이너와 소통하면서 UI&UX에 대해 함께 공부하고 고민해볼 수 있었습니다.
                  bootstrap을 활용하여 반응형 웹으로 제작했습니다.
                </p>
              </div>
              <div className='projectSkillDescript'>
                <div className='descriptWrapper'>
                  <span className='projectLabel'>주요기능</span>
                  <span className='projectValue'>봉사활동 모집 게시글 작성, 수정, 삭제하기</span>
                </div>

                <div className='descriptWrapper'>
                  <span className='projectLabel'>Github</span>
                  <span className='projectValue'>
                    <a href='https://github.com/EunSungMoon/friends'>https://github.com/EunSungMoon/friends</a>
                  </span>
                </div>

                <div className='descriptWrapper'>
                  <span className='projectLabel'>도메인</span>
                  <span className='projectValue'>곧 생길 예정!!</span>
                </div>

                <div className='descriptWrapper'>
                  <span className='projectLabel'>Front-end</span>
                  <span className='projectValue'>React, sass</span>
                </div>

                <div className='descriptWrapper'>
                  <span className='projectLabel'>Back-end</span>
                  <span className='projectValue'>Django</span>
                </div>

                <div className='descriptWrapper'>
                  <span className='projectLabel'>Deployment</span>
                  <span className='projectValue'>AWS, nginx</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
} 