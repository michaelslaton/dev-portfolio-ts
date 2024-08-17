import SkillType from '../../../types/skill.type';
import '../skills.css';

type SkillProps = {
  data: SkillType;
}

const Skill:React.FC<SkillProps> = ({ data }) =>{

  return (
    <div className='skill__wrapper'>
      <div 
        className='skill__icon'
        style={{ backgroundColor: `${data.iconColor}` }}
        >
        <img className='skill__icon-image' src={data.iconimg}/>
      </div>
      <p
        className='skill__icon-title'
      >
        {
          data.abbr ? 
          <abbr title={data.abbr}>{data.name}</abbr>
            :
          <>{data.name}</>
        }
      </p>
    </div>
  );
};

export default Skill;