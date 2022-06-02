import './Skills.scss';
import SkillsCom from './SkillCom';
import frontend from './img/frontend.png';
import versioncontrol from './img/versioncontrol.png'
import communication from './img/communication.png'
import deployment from './img/deployment.png'

export default function Skills() {
  return (
    <section id='skills'>
      <div className='container skillsWrap'>
        <div className='titleWrap'>
          <h1>SKILLS</h1>
        </div>
        <div className='stackContainer'>
          <SkillsCom className="" title={'Front-end'} img={frontend} />
          <SkillsCom className="margin" title={'Version Control'} img={versioncontrol} />
          <SkillsCom className="" title={'Communication'} img={communication} />
          <SkillsCom className="margin" title={'Deployment'} img={deployment} />
        </div>
      </div>
    </section>
  )
}