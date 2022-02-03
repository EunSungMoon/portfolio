import Project from '../ProjectCom/Project'
import './Main.scss'
import Aboutme from '../AboutmeCom/Aboutme';
import Skills from '../SkillsCom/Skills';

export default function Main() {
  return (
    <main>
      <Aboutme />
      <Skills />
      <Project />
    </main>
  )
}