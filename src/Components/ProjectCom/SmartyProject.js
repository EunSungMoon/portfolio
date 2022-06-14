import ProjectCom from './ProjectContent';
import smartyLogin from './projectImg/smartyLogin.png'
import smartySignin from './projectImg/smartySignin.png'
import smartyTodolist from './projectImg/smartyTodolist.png'
import smartyEdit from './projectImg/smartyEdit.png'

export default function SmartyProject() {
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
    <ProjectCom
      title="똑똑이"
      period="2022.02 - 2022.03 (3인 프로젝트)"
      projectImage={[
        smartyLogin,
        smartySignin,
        smartyTodolist,
        smartyEdit
      ]}
      mainDescript={
        `웹 개발 입문시 진행하는 필수 코스인  To Do 리스트 입니다. 
        회원 기능을 추가하여 로그인 된 사용자 본인의 내용만 관리할 수 있습니다. 
        모바일에서도 원활한 사용이 가능한 반응형 웹에 초점을 맞추었습니다. `
      }
      subDescript={smartySub()}
      service="투두리스트, 중요도 관리, 캘린더, 일정 반복"
      gitAddress="github.com/EunSungMoon/smarty"
      domain="곧 생길 예정"
      front="React, typescript, sass, Bootstrap"
      back="Django"
      deployment="AWS, nginx"
    />
  )
}