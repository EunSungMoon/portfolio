import ProjectCom from './ProjectContent';
import friendsLogin from './projectImg/friendsLogin.png'

export default function PorfoiloProject() {
  const portfolioSub = () => (
    <p>
      계속해서 프로젝트들을 업로드 할 예정입니다.
    </p>
  )
  
  return (
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
  )
}