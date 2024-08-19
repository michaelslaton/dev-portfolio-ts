import SkillType from '../../../types/skill.type';
import '../skills.css';

type SkillProps = {
  data: SkillType;
};

const Skill:React.FC<SkillProps> = ({ data }) =>{

  return (
    <abbr title={data.abbr}>
      <a
        className='skill__wrapper'
        href={`https://www.google.com/search?q=${data.name}`}
        target='_blank'
      >
        <div 
          className='icon skill__icon'
          style={{ backgroundColor: `${data.iconColor}` }}
          >
          <img className='skill__icon-image' src={data.iconimg}/>
        </div>
        <p
          className='skill__icon-title'
        >
          <>{data.name}</>
        </p>
      </a>
    </abbr>
  );
};

export default Skill;