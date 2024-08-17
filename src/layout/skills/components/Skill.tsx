import SkillType from '../../../types/skill.type';
import '../skills.css';

type SkillProps = {
  data: SkillType;
};

const Skill:React.FC<SkillProps> = ({ data }) =>{

  return (
    <abbr title={data.abbr}>
      <div className='skill__wrapper'>
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
      </div>
    </abbr>
  );
};

export default Skill;