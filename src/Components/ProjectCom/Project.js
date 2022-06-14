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
      eslint까지 적용하면서 더 규격화된 코딩을 하게 되었다.
      <span className='colorRed'> useState, useEffect를 사용하면서도 렌더링 되는 과정이 어렴풋이 이해하고 있었지만 이번 프로젝트를 통해 확실하게 공부할 수 있었다. </span>
      Mui 컴포넌트 라이브러리에 있는 collapse table 활용했다.
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
        <SmartyProject />

        <ProjectCom
          title="채미왔소"
          period="2022.04 - 2022.05 (3인 프로젝트)"
          projectImage={[
            friendsLogin
          ]}
          mainDescript={`수동 재고관리의 문제점에 착안하여 소규모 식료품 사업장에서도 전산화된 재고관리가 가능하게끔 도와주는 웹 사이트 입니다. 
          사용자는 매출 현황과 폐기 품목들을 확인 할 수 있습니다. 
          이 웹사이트는 사장님들의 효율적인 재고관리를 가능하게 합니다.`}
          subDescript={marketSub()}
          service="제품 등록, 일일 매출 관리, 재고량 현황 파악 등등"
          gitAddress="github.com/EunSungMoon/marketmanagement"
          domain="곧 생길 예정"
          front="React, typescript, sass, Bootstrap, mui"
          back="Django"
          deployment="AWS, nginx"
        />
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
      </div>
    </section>
  )
} 