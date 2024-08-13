import SkillType from '../../types/skill.type';
import './skills.css';

type SkillProps = {
  data: SkillType;
}

const Skill:React.FC<SkillProps> = ({ data }) =>{

  return (
    <div>
      {data.name}
    </div>
  );
};

export default Skill;