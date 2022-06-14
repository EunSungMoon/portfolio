import Project from '../ProjectCom/Project'
import './Main.scss'
import Aboutme from '../AboutmeCom/Aboutme';
import Skills from '../SkillsCom/Skills';
import Timeline from '../TimelineCom/Timeline';

export default function Main() {
  return (
    <main>
      <Aboutme />
      <Project />
      <Skills />
      <Timeline />
    </main>
  )
}