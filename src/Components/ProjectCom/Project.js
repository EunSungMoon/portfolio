import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCom from './ProjectContent';
import FriendsProject from './FriendsProject';
import friendsLogin from './projectImg/friendsLogin.png'
import SmartyProject from './SmartyProject';
import LottolottoProject from './LottolottoProject';


export default function Project() {
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

  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>
        <FriendsProject />
        <LottolottoProject />

        <ProjectCom
          title="포트폴리오"
          period="2022.02- (1인 프로젝트)"
          projectImage={[
            friendsLogin
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

        <SmartyProject />

        <ProjectCom
          title="채미왔소"
          period="2022.04 - 2022.05 (3인 프로젝트)"
          projectImage={[
            friendsLogin
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