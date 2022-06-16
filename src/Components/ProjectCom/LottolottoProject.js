import ProjectCom from './ProjectContent';
import lottolottoMain1 from './projectImg/lottolottoMain1.png'
import lottolottoMain2 from './projectImg/lottolottoMain2.png'

export default function LottolottoProject() {
  const lottoSub = () => (
    <p>
      웹 위주로 프로젝트를 진행하다가 반응형 모바일에 도전하게 되었습니다.
      초기 디자인을 바탕으로 <span className='colorRed'>모바일을 만들었는데</span> 
      디자이너와 디테일한 부분들을 맞추는 과정이 흥미로웠습니다 
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
        `로또 번호를 자동 생성해주는 웹사이트입니다.
        이 사이트로 1등 당첨을 기대하는 마음으로 만들었습니다. 
        웹디자이너가 참여한 첫 프로젝트입니다.  
        보라색 파스텔 톤 디자인을 채택하여 장난감 같은 편안한 분위기를 연출했습니다.
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