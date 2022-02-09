import './Timeline.scss';

export default function Timeline() {
  return (
    <section id='timeline'>
      <div className='container timelineWrap'>
        <div className='titleWrap'>
          <h1>TIMELINE</h1>
        </div>
        <article className='timelineInfo'>
          <div className="careerWrap">
            <span className="careerDate">2015.03</span>
            <div className='detailWrap'>
              <p className="careerContent">고려대학교 입학</p>
              <p className="careerDetail">전자 및 정보공학과</p>
            </div>
          </div>
          <div className="careerWrap">
            <span className="careerDate">2020.12</span>
            <div className='detailWrap'>
              <p className="careerContent">전기기사 자격증 취득</p>
            </div>
          </div>
          <div className="careerWrap">
            <span className="careerDate">2021.05-2021.11</span>
            <div className='detailWrap'>
              <p className="careerContent">마이다스인</p>
              <p className="careerDetail">인턴 - 서비스 유지보수</p>
            </div>
          </div>
          <div className="careerWrap noMargin">
            <span className="careerDate">2022.02</span>
            <div className='detailWrap'>
              <p className="careerContent">고려대학교 졸업</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}