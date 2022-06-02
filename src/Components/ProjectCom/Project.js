import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCom from './ProjectContent';
import mainpage from './projectImg/mainpage.png'
import boardpage from './projectImg/boardpage.png'
import contentpage from './projectImg/contentpage.png'

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
      <span className='colorRed' >로또번호를 생성해주고, 지난 회차 1등 당첨 번호 보여주기 기능이 들어있는 웹입니다.</span>
      랜덤하게 숫자를 출력하는 로직, 숫자별 공 색깔 다르게 하는 로직을 구성하기, 외부 api를 활용하는 방법을 공부할 수 있었습니다.
    </p>
  )
  const portfolioSub = () => (
    <p>
      계속해서 프로젝트들을 업로드 할 예정입니다.
    </p>
  )

  const marketSub = () => (
    <p>
      <span className='colorRed'></span>
      typescript를 적용한 두번째 프로젝트.
      타입을 지정하는 것이 전보단 많이 좋아졌지만 그래도 익숙하지 않았습니다.
      eslint까지 적용해서인지 어려움이 많았지만 코드를 작성하는 공부를 할 수 있었다.
      react로 여러 프로젝트를 개발했지만 useEffect를 사용하면서도 렌더링 되는 과정이 이해가 안됬었는데 확실하게 공부할 수 있었습니다.
      이전보단 훨씬 다양하게 react의 기능들을 사용하려 도전했고 공부하는데 도움이 많이 되었다.
      새로운 component 라이브러리를 사용해봤습니다.
    </p>
  )

  const smartySub = () => (
    <p>
      <span className='colorRed'>typescript로 개발한 프로젝트입니다.</span>
      typescript를 공부할 수 있는 좋은 경험이었습니다.
      static한 타입 언어를 처음 사용해서 어려움이 많았습니다.
      개발을 진행하면 할수록 javascript를 사용할 때 보다 쉽게 오류를 찾아낼 수 있었습니다.
      앞으로 typescript 공부를 더 해볼 계획입니다.
      dayjs를 사용해 캘린더를 개발하고, 클릭한 날짜에 해당하는 투두리스트를 출력해주는 기능을 개발했습니다.
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
            mainpage,
            boardpage,
            contentpage
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
          gitAddress="github.com/EunSungMoon/lottery"
          domain="곧 생길 예정"
          front="React, javascript, sass, Bootstrap"
          back="Django"
          deployment="AWS, nginx"
        />

        <ProjectCom
          title="포트폴리오"
          period="2022.02- (1인 프로젝트)"
          projectImage={[
            boardpage,
            contentpage,
            mainpage
          ]}
          mainDescript={`현재 보고있는 이 웹사이트를 말하며, 포트폴리오 용으로 제작되었습니다.`}
          subDescript={portfolioSub()}
          service="자기소개, 기술 스택, 프로젝트 경험, 이력"
          gitAddress="github.com/EunSungMoon/portfolio"
          domain="곧 생길 예정"
          front="React, javascript, sass, Bootstrap"
          back=""
          deployment="AWS, nginx"
        />

        <ProjectCom
          title="똑똑이"
          period="2022.02 - 2022.03 (3인 프로젝트)"
          projectImage={[
            boardpage,
            contentpage,
            mainpage
          ]}
          mainDescript={`똑똑하게 관리해주는 투두리스트 똑똑이`}
          subDescript={smartySub()}
          service="투두리스트, 중요도 관리, 캘린더, 일정 반복"
          gitAddress="github.com/EunSungMoon/smarty"
          domain="곧 생길 예정"
          front="React, typescript, sass, Bootstrap"
          back="Django"
          deployment="AWS, nginx"
        />

        <ProjectCom
          title="채미왔소"
          period="2022.04 - 2022.05 (3인 프로젝트)"
          projectImage={[
            boardpage,
            contentpage,
            mainpage
          ]}
          mainDescript={`구멍가게 재고관리 시스템`}
          subDescript={marketSub()}
          service="제품 등록, 일일 매출 관리, 재고량 현황 파악 등등"
          gitAddress="github.com/EunSungMoon/marketmanagement"
          domain="곧 생길 예정"
          front="React, typescript, sass, Bootstrap, mui"
          back="Django"
          deployment="AWS, nginx"
        />
      </div>
    </section>
  )
} 