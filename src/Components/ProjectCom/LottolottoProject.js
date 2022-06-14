import ProjectCom from './ProjectContent';
import lottolottoMain1 from './projectImg/lottolottoMain1.png'
import lottolottoMain2 from './projectImg/lottolottoMain2.png'

export default function LottolottoProject() {
  const lottoSub = () => (
    <p>
      <span className='colorRed'>웹 디자이너와 협업이 주로 이루어진 프로젝트이다. </span>
      그래서 기능보단 디자인에 집중하기로 했다.
      처음에는 웹 위주의 프로젝트를 진행하다가 모바일도 도전하게 되었다.
      웹 위주의 디자인을 가지고 <span className='colorRed'>모바일을 만들었는데</span> 디자이너와 디자인 수정하면서 서로의 입장을 나누고,
      맞추는 과정들이 꽤나 흥미로웠다.
    </p>
  )

  return (
    <ProjectCom
      title="lottolotto"
      period="2021.01.25-2022.02.15 (3인 프로젝트)"
      projectImage={[
        lottolottoMain1,
        lottolottoMain2
      ]}
      mainDescript={
        `로또 번호를 자동 생성해주는 웹사이트입니다. 과거의 1등 당첨번호도 확인 할 수 있습니다. 
        이 사이트로 1등 당첨을 기대할 수 있을까요? 
        평소 알고 지내던 사람들과 시작한 첫 웹 개발 프로젝트입니다. 
        현재 많은 웹 사이트에서 자동 로또 번호 생성기를 제공하고 있지만 상업성이 짙은 느낌입니다. 
        기존 웹사이트와는 다르게 파스텔 톤 디자인을 채택하여 장난감 같은 편안한 분위기를 연출합니다.
        `
      }
      subDescript={lottoSub()}
      service="랜덤한 숫자 6자리 출력, 지난 회차 당첨 번호 보여주기"
      gitAddress="github.com/EunSungMoon/lottery"
      domain="곧 생길 예정"
      front="React, javascript, sass, Bootstrap"
      back="Django"
      deployment="AWS, nginx"
    />
  )
}