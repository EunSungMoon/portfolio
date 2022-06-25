import ProjectCom from './ProjectContent';
import friendsLogin from './projectImg/friendsLogin.png'
import friendsSignin from './projectImg/friendsSignin.png'
import friendsMain from './projectImg/friendsMain.png'
import friendsBoard from './projectImg/friendsBoard.png'
import friendsEnroll from './projectImg/friendsEnroll.png'
import friendsEdit from './projectImg/friendsEdit.png'
import friendsListdetail from './projectImg/friendsListdetail.png'
import friendsProfile from './projectImg/friendsProfile.png'


export default function FriendsProject() {
  const friendsSub = () => (
    <p>
      원래 프렌즈는 순수 자바스크립트로 개발을 하다가 react로 전환시켰습니다.
      왜 많은 사람들이 react를 사용하는지 알고싶었기 때문입니다.
      순수 자바스크립트보다 편리하게 상태관리를 할 수 있다는 장점이 있습니다. 
      <br /><br />
      react를 처음 사용하는 만큼 친해는것에 목표를 두었습니다.
      <span className='colorRed'> useState, useEffect를 사용하는 것, 비동기 처리되는 것은</span> 어려웠지만 목표대로 react와 친해지기는 성공했습니다.
      <br /><br />
      api를 사용해보면서 백엔드 개발자와의 협업방법을 배울 수 있었습니다. 
      <br />
      앞으로 해결해 나갈 숙제들이 많지만 뿌듯하고 즐거웠던 프로젝트였습니다.
    </p>
  )
  return (
    <ProjectCom
      title="프렌즈"
      period="2021.12-2022.02 (2인 프로젝트)"
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
        `미용사들과 미용봉사가 필요한 사람들을 연결하는 봉사활동 매칭 플랫폼입니다. 
        미용사들이 휴일에 봉사활동을 하고 싶어하지만 마땅한 기관이나 장소를 찾지 못하는 어려움에 착안했습니다.
      `}
      subDescript={friendsSub()}
      service="봉사 모집 게시글 작성, 수정, 삭제하기"
      gitAddress="github.com/EunSungMoon/friends"
      domain="friends.moon-portfolio.co.kr"
      front="React, javascript, sass, Bootstrap"
      back="Django"
      deployment="AWS, nginx"
    />
  )
}