import ProjectCom from './ProjectContent';
import smartyLogin from './projectImg/smartyLogin.png'
import smartySignin from './projectImg/smartySignin.png'
import smartyTodolist from './projectImg/smartyTodolist.png'
import smartyEdit from './projectImg/smartyEdit.png'

export default function SmartyProject() {
  const smartySub = () => (
    <p>
      <span className='colorRed'>typescript로 개발한 프로젝트입니다.</span>
      변수의 타입을 지정하는 것부터 난관이었습니다.
      평소 아무런 기준 없이 변수나 이벤트들을 설정했다면 typescript의 딱딱한 설정은 일관된 코드 작성하는데 도움이 되었습니다.
      <br /><br />
      캘린더는 moment.js 대신 dayjs를 사용했습니다. 용량과 성능을 동시에 비교했을대 dayjs를 선택하는 것이 더 효율적이라 생각했습니다.
      <br /><br />
      리스트의 중요도를 높음, 중간, 낮음 3단계로 나누어 서로다른 색을 사용하여 포인트를 강조했습니다.
      월간 보기, 일간 보기 등의 기능을 추가하여 월 단위, 일 단위로도 To Do 리스트를 확인 할 수 있도록 했습니다.
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
      service="투두리스트, 중요도 관리, 캘린더"
      gitAddress="github.com/EunSungMoon/smarty"
      domain="곧 생길 예정"
      front="React, typescript, sass, Bootstrap"
      back="Django"
      deployment="AWS, nginx"
    />
  )
}