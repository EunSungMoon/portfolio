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
      <span className='colorRed' >이번 프로젝는 처음 시도하는 것들이 많았다. Axios, react, 백엔드와의 협업까지 </span>
      그래서 모두를 완벽하게 이해하고 넘어가기보단 새로운 것들과 친해지기에 목표를 두었다.
      <p></p>
      원래 프렌즈는 순수 자바스크립트로 개발을 하다가 react로 전환시켰다.
      전환시킨 이유는 그냥이었다. 많은 사람들이 react에 열광하는지 직접 사용해보자 라는 마음으로 시작하게 된 프로젝트이다.
      순수 자바스크립트보다 편리하게 상태관리를 할 수 있다는 장점이 가장 큰 것 같다. 처음이라 이벤트를 적용시키는 것부터 어색했다.
      useState, useEffect를 사용하는 것, 비동기 처리되는 것은 더더욱 어려웠지만 목표대로 react와 친해지기는 성공했다.
      <p></p>
      백엔드와의 협업을 통해서 많은 것들을 배울 수 있는 프로젝트였다. api를 사용해보고, 다른 개발자와 소통하고, 서로의 분야에 대해 공유하는 것 등등 흥미로운 것들을 많이 배울 수 있었다.
      <p></p>
      앞으로 해결해 나갈 숙제들이 많지만 개발하는 내내 뿌듯하고 즐거웠던 프로젝트였다.
    </p>
  )

  const lottoSub = () => (
    <p>
      <span className='colorRed'>웹 디자이너와 협업이 주로 이루어진 프로젝트이다. </span>
      그래서 기능보단 디자인에 집중하기로 했다.
      처음에는 웹 위주의 프로젝트를 진행하다가 모바일도 도전하게 되었다.
      웹 위주의 디자인을 가지고 <span className='colorRed'>모바일을 만들었는데</span> 디자이너와 디자인 수정하면서 서로의 입장을 나누고,
      맞추는 과정들이 꽤나 흥미로웠다.
    </p>
  )
  const portfolioSub = () => (
    <p>
      계속해서 프로젝트들을 업로드 할 예정입니다.
    </p>
  )

  const marketSub = () => (
    <p>
      typescript를 적용한 두번째 프로젝트이다. 
      타입을 지정하는 것이 전보단 많이 좋아졌지만 그래도 익숙하지 않았다. 
      eslint까지 적용해서인지 어려움이 많았지만 개발 공부하는데 많은 도움이 되었다. 
      React로 여러 프로젝트를 개발했지만 <span className='colorRed'>useState, useEffect를 사용하면서도 렌더링 되는 과정이 이해가 안됐었는데 확실하게 공부할 수 있었다.</span>
      이전보단 훨씬 다양하게 react의 기능들을 사용하려 도전하려 노력했고, 새로운 Mui 라이브러리를 사용해봤다.
    </p>
  )

  const smartySub = () => (
    <p>
      <span className='colorRed'>typescript로 개발한 프로젝트입니다.</span>
      도입하게 된 이유는 호기심이었다.
      변수의 타입을 지정하는 것부터 난관이었다.
      바닐라js를 사용했을 때 넘어간 문제들이 보였고, 해결하는 재미가 쏠쏠했다.
      아직은 typescript의 다양한 기능들을 활용하지 못해 아쉬웠다. 더 공부해서 활용을 더 해보고 싶다.
      <p></p>
      캘린더는 장 많이 사용하던 moment.js대신 dayjs를 사용했다. 장단점을 고려했을 때 dayjs를 선택하는 것이 좋을 듯 했다.
      <p></p>
      리스트의 중요도를 높음, 중간, 낮음 3단계로 나누어 서로다른 색을 사용하여 포인트를 강조했다.
      월간 보기, 일간 보기 등의 기능을 추가하여 월 단위, 일 단위로도 To Do 리스트를 확인 할 수 있도록 했다.
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
          mainDescript={`본인이 가진 기술로 봉사를 하고 싶은 미용사들과 봉사가 필요한 사람들을 연결하는 봉사활동 매칭 플랫폼입니다. 
          기획자는 미용 자격증을 가지고 있는 사람으로 휴일에는 봉사활동에 참여하고 싶었으나 마땅한 기관이나 장소를 찾지 못하는 어려움에 착안했습니다.`}
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
          mainDescript={`로또 번호를 자동 생성해주는 웹사이트입니다. 과거의 1등 당첨번호도 확인 할 수 있습니다. 
          이 사이트로 1등 당첨을 기대할 수 있을까요? 
          평소 알고 지내던 사람들과 시작한 첫 웹 개발 프로젝트입니다. 
          현재 많은 웹 사이트에서 자동 로또 번호 생성기를 제공하고 있지만 상업성이 짙은 느낌입니다. 
          기존 웹사이트와는 다르게 파스텔 톤 디자인을 채택하여 장난감 같은 편안한 분위기를 연출합니다.
          `}
          subDescript={lottoSub()}
          service="랜덤한 숫자 6자리 출력, 지난 회차 당첨 번호 보여주기"
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
          mainDescript={`웹 개발 입문시 진행하는 필수 코스인  To Do 리스트 입니다. 
          회원 기능을 추가하여 로그인 된 사용자 본인의 내용만 관리할 수 있습니다. 
          모바일에서도 원활한 사용이 가능한 반응형 웹에 초점을 맞추었습니다. `}
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
          mainDescript={`아직까지도 많은 곳에선 재고 관리를 수동으로 진행합니다. 
          이러한 문제점에 착안하여 소규모 식재료 납품 사업장에서도 전산화된  재고관리가 가능하게끔 도와주는 웹 사이트 입니다. 
          유통기한과 출고일을 기점으로 사용자는 매출 현황과 폐기 품목들을 확인 할 수 있습니다. 
          육류, 채소루 등 종류별로 재고현황을 토대로 사장님들은 매입 계획을 세우고 유통기한이 지나 버려지는 품목을 최소화하여 경제적인 운영이 가능합니다.`}
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