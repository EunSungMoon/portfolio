import './Skills.scss';
import SkillsCom from './SkillCom';
import frontend from './img/frontend.png';
import versioncontrol from './img/versioncontrol.png'
import communication from './img/communication.png'

export default function Skills() {
  return (
    <section id='skills'>
      <div className='container skillsWrap'>
        <div className='titleWrap'>
          <h1>SKILLS</h1>
        </div>
        <div className='stackContainer'>
          <SkillsCom title={'Front-end'} img={frontend}/>
          <SkillsCom title={'Version Control'} img={versioncontrol} />
          <SkillsCom title={'Communication'} img={communication} />
        </div>
      </div>
    </section>
  )
}