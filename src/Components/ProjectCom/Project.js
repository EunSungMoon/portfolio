import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCom from './ProjectContent';

export default function Project() {
  const friendsSub = () => (
    <p>
    <span className='colorRed' >이번 프로젝는 처음 시도하는 것들이 많았다. Axios, react, 외부 라이브러리까지</span>
    그래서 두마리 토끼를 동시에 잡을 수 없듯 모두를 완벽하게 이해하고 넘어가기보단 react, axios와 친해지기에 목표를 두었다.
    원래 프렌즈는 순수 자바스크립트로 개발을 하다가 react로 전환시켰다.
    전환시킨 이유는 그냥이었다.react를 왜 사용하고, 왜 많은 사람들이 사용하는지 모르고 그냥 많이 사용하니까 써보자 라는 마음으로 시작하게 된 프로젝트이다.
    순수 자바스크립트보다 편리하게 상태관리를 할 수 있다는 장점이 가장 큰 것 같다. 처음이라 이벤트를 적용시키는 것부터 어색했다.
    useState, useEffect를 사용하는 것, 비동기 처리되는 것은 더더욱 어렵게 했다. 목표대로 react와 친해지기는 성공했다.
    앞으로 해결해 나갈 숙제들이 많지만 개발하는 내내 뿌듯하고 즐거웠던 프로젝트였다.
  </p>
  )

  const lottoSub = () => (
    <p>
      <span className='colorRed' >이번 프로젝는 처음 시도하는 것들이 많았다. Axios, react, 외부 라이브러리까지</span>
      그래서 두마리 토끼를 동시에 잡을 수 없듯 모두를 완벽하게 이해하고 넘어가기보단 react, axios와 친해지기에 목표를 두었다.
      원래 프렌즈는 순수 자바스크립트로 개발을 하다가 react로 전환시켰다.
      전환시킨 이유는 그냥이었다.react를 왜 사용하고, 왜 많은 사람들이 사용하는지 모르고 그냥 많이 사용하니까 써보자 라는 마음으로 시작하게 된 프로젝트이다.
      순수 자바스크립트보다 편리하게 상태관리를 할 수 있다는 장점이 가장 큰 것 같다. 처음이라 이벤트를 적용시키는 것부터 어색했다.
      useState, useEffect를 사용하는 것, 비동기 처리되는 것은 더더욱 어렵게 했다. 목표대로 react와 친해지기는 성공했다.
      앞으로 해결해 나갈 숙제들이 많지만 개발하는 내내 뿌듯하고 즐거웠던 프로젝트였다.
    </p>
  )

  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>
        <ProjectCom
          title="프렌즈"
          period="2021.12-2022.02 (3인 프로젝트)"
          projectImage={[
            "mainpage",
            "boardpage",
            "contentpage"
          ]}
          mainDescript={`기관이나 병원은 봉사자 모집글을 게시하고 봉사활동을 원하는 사람들은 게시글을 보고 참여할 수 있다. 
          누구나 쉽게 참여하고, 누구나 쉽게 모집할 수 있도록 봉사활동의 선순환을 만드는 것이 프렌즈의 목표!`}
          subDescript={friendsSub()}
          service="봉사 모집 게시글 작성, 수정, 삭제하기"
          gitAddress="github.com/EunSungMoon/friends"
          domain="곧 생길 예정"
          front="React, javascript, sass, Bootstrap"
          back="Django"
          deployment="AWS, nginx"
        />
        <ProjectCom
          title="lottolotto"
          period="2021.01.25-2022.02.15 (3인 프로젝트)"
          projectImage={[
            "lottery1",
            "lottery2"
          ]}
          mainDescript={`이번 프로젝트는 백엔드 개발자와의 협업 보다는 웹 디자이너와의 협업이 주로 이루어진 프로젝트 입니다.`}
          subDescript={lottoSub()}
          service="랜덤한 숫자 7자리 출력, 지난 회차 당첨 번호 보여주기"
          gitAddress="github.com/Eu nSungMoon/lottery"
          domain="곧 생길 예정"
          front="React, javascript, sass, Bootstrap"
          back="Django"
          deployment="AWS, nginx"
        />
      </div>
    </section>
  )
} 