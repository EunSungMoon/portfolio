import './Project.scss';

import boardpage from './img/friends_boardpage.png';
import contentpage from './img/friends_contentpage.png';
import mainpage from './img/friends_mainpage.png'
import DescriptCom from './DescriptCom';

export default function Project() {
  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>
        <article className='projectInfo'>
          <DescriptCom
            projectTitle={'프렌즈'}
            projectPeriod={'2021.12-2022.2 (3인 프로젝트)'}
            img1={mainpage}
            img2={boardpage}
            img3={contentpage}
            mainDescript1={
              `기관이나 병원은 봉사자 모집글을 게시하고
            봉사활동을 원하는 사람들은 게시글을 보고 참여할 수 있다
            누구나 쉽게 참여하고, 누구나 쉽게 모집할 수 있도록
            봉사활동의 선순환을 만드는 것이 프렌즈의 목표!`
            }
            mainDescript2={
              `백엔드 개발자, 웹디자이너와 함께 개발한 프로젝트입니다.
            백엔드 개발자와의 협업으로 API통신 기본원리, HTTP의 작동원리에 대한 개념들을 확실하게 정리할 수 있었습니다.
            웹 디자이너와 소통하면서 UI&UX에 대해 함께 공부하고, 고민해볼 수 있었습니다.
            Bootstrap을 활용한 반응형 웹으로 제작했습니다.`
            }
            mainService={'봉사 모집 게시글 작성, 수정, 삭제하기'}
            gitAddress={'github.com/EunSungMoon/friends'}
            domain={'곧 생길 예정!!'}
            front={'React, sass'}
            back={'Django'}
            deployment={'AWS, nginx'}
          />
        </article>
        <article className='projectInfo'>
          <DescriptCom
            projectTitle={'프렌즈1'}
            projectPeriod={'2021.12-2022.2 (3인 프로젝트)'}
            img1={mainpage}
            img2={boardpage}
            img3={contentpage}
            mainDescript1={
              `기관이나 병원은 봉사자 모집글을 게시하고
            봉사활동을 원하는 사람들은 게시글을 보고 참여할 수 있다
            누구나 쉽게 참여하고, 누구나 쉽게 모집할 수 있도록
            봉사활동의 선순환을 만드는 것이 프렌즈의 목표!`
            }
            mainDescript2={
              `백엔드 개발자, 웹디자이너와 함께 개발한 프로젝트입니다.
            백엔드 개발자와의 협업으로 API통신 기본원리, HTTP의 작동원리에 대한 개념들을 확실하게 정리할 수 있었습니다.
            웹 디자이너와 소통하면서 UI&UX에 대해 함께 공부하고, 고민해볼 수 있었습니다.
            Bootstrap을 활용한 반응형 웹으로 제작했습니다.`
            }
            mainService={'봉사 모집 게시글 작성, 수정, 삭제하기'}
            gitAddress={'github.com/EunSungMoon/friends'}
            domain={'곧 생길 예정!!'}
            front={'React, sass'}
            back={'Django'}
            deployment={'AWS, nginx'}
          />
        </article>
      </div>
    </section>
  )
} 