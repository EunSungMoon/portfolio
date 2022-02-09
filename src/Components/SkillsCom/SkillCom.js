export default function SkillsCom(props) {
  return (
    <div className={`stackWrap ${props.className}`}>
      <h2 className='h2'>{props.title}</h2>
      <img className="img" src={props.img} alt=''></img>
    </div>
  )
}