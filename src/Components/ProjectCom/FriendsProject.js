import ProjectCom from './ProjectContent';
import friendsLogin from './projectImg/friendsLogin.png'
import friendsSignin from './projectImg/friendsSignin.png'
import friendsMain from './projectImg/friendsMain.png'
import friendsBoard from './projectImg/friendsBoard.png'
import friendsEnroll from './projectImg/friendsEnroll.PNG'
import friendsEdit from './projectImg/friendsEdit.png'
import friendsListdetail from './projectImg/friendsListdetail.png'
import friendsProfile from './projectImg/friendsProfile.png'


export default function FriendsProject() {
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
  return (
    <ProjectCom
      title="프렌즈"
      period="2021.12-2022.02 (3인 프로젝트)"
      projectImage={[
        friendsLogin,
        friendsSignin,
        friendsMain,
        friendsBoard,
        friendsEnroll,
        friendsEdit,
        friendsListdetail,
        friendsProfile
      ]}
      mainDescript={
        `본인이 가진 기술로 봉사를 하고 싶은 미용사들과 봉사가 필요한 사람들을 연결하는 봉사활동 매칭 플랫폼입니다. 
        기획자는 미용 자격증을 가지고 있는 사람으로 휴일에는 봉사활동에 참여하고 싶었으나 마땅한 기관이나 장소를 찾지 못하는 어려움에 착안했습니다.
      `}
      subDescript={friendsSub()}
      service="봉사 모집 게시글 작성, 수정, 삭제하기"
      gitAddress="github.com/EunSungMoon/friends"
      domain="곧 생길 예정"
      front="React, javascript, sass, Bootstrap"
      back="Django"
      deployment="AWS, nginx"
    />
  )
}